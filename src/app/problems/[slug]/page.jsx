"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "@/lib/api";
import ArenaNavbar from "./ArenaNavbar";
import ProblemDescription from "./ProblemDescription";
import CodeArenaEditor from "./CodeArenaEditor";
import Navbar from "@/components/Navbar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function ProblemSlugPage() {
  const { slug } = useParams();
  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userCode, setUserCode] = useState("");
  const [activeTab, setActiveTab] = useState("description");
  const [submissions, setSubmissions] = useState([]);

  // --- Execution State ---
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState([]);
  const [selectedLang, setSelectedLang] = useState("javascript");
  const [starterCodes, setStarterCodes] = useState();

  const [open, setOpen] = useState(false);
  const [tempLang, setTempLang] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [probRes, subRes] = await Promise.all([
          api.get(`/problems/${slug}`),
          api.get(`/submissions?slug=${slug}`)
        ]);

        let activeStarterCodes = null;
        if (probRes.data?.problem) {
          setProblem(probRes.data.problem);
          activeStarterCodes = probRes.data.problem.starterCodes;
          setStarterCodes(activeStarterCodes);
        }

        let loadedSubmissions = [];
        if (subRes.data?.success) {
          loadedSubmissions = subRes.data.submissions;
          setSubmissions(loadedSubmissions);
        }

        // Initialize editor state with latest submission if it exists
        if (loadedSubmissions.length > 0) {
          const latestSub = loadedSubmissions[0];
          setSelectedLang(latestSub.language || "javascript");
          setUserCode(latestSub.code);
        } else {
          setUserCode(activeStarterCodes?.["javascript"] || "");
        }

      } catch (err) {
        console.error("Failed to fetch arena data", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [slug]);

  // useEffect(() => {
  //   setOpen(true)
  //   if(userConfirmed){
  //     setUserCode(starterCodes?.[selectedLang]);
  //     setUserConfirmed(false)
  //   }
  // }, [selectedLang]);

  const handleRunCode = async (isSubmit = false) => {
    setIsRunning(true);
    try {
      const resp = await api.post(`/run`, {
        slug,
        code: userCode,
        language: selectedLang,
        isSubmit: isSubmit
      });
      const data = resp.data;
      setResults(data);
      if (isSubmit) {
        // fetch sumbissions on submit to refresh the list
        try {
          const subRes = await api.get(`/submissions?slug=${slug}`);
          if (subRes.data?.success) {
            setSubmissions(subRes.data.submissions);
          }
        } catch (e) { }
        setActiveTab("submissions");
      }
    } catch (err) {
      setResults({
        status: err?.response?.data?.error,
      });
      console.log(err);
    }

    setIsRunning(false);
  };

  const handleRun = () => handleRunCode(false);
  const handleSubmit = () => handleRunCode(true);

  const handleConfirm = () => {
    setSelectedLang(tempLang);
    setUserCode(starterCodes?.[tempLang]);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  if (loading)
    return (
      <div className="h-screen bg-[#050505] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-2 border-mainCol border-t-transparent rounded-full animate-spin" />
          <p className="text-zinc-500 font-black text-[10px] tracking-[0.3em] uppercase animate-pulse">
            Loading Challenge...
          </p>
        </div>
      </div>
    );

  return (
    <div className="h-screen bg-[#0a0a0a] flex flex-col overflow-hidden text-zinc-300">
      <Navbar />
      {/* Pass handleRunCode to the Navbar */}
      <ArenaNavbar
        title={problem?.title}
        onRun={handleRun}
        onSubmit={handleSubmit}
        isRunning={isRunning}
      />

      <main className="flex-1 flex overflow-hidden">
        <div className="w-1/2 border-r border-white/5 flex flex-col bg-[#0f0f0f]">
          {/* Tabs */}
          <div className="flex items-center gap-6 px-8 py-3 border-b border-white/5 bg-zinc-900/50">
            {["Description", "Submissions", "Video"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`text-xs font-bold uppercase tracking-widest pb-3 border-b-2 transition-all ${activeTab === tab.toLowerCase()
                  ? "text-mainCol border-mainCol"
                  : "text-zinc-500 border-transparent hover:text-zinc-300"
                  } -mb-[13px]`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
            {activeTab === "description" && <ProblemDescription problem={problem} />}

            {activeTab === "video" && (
              <div className="flex flex-col items-center justify-center h-full">
                {problem.videoId ? (
                  <iframe
                    width="100%"
                    height="100%"
                    className="max-h-[70vh] rounded-xl shadow-2xl border border-white/10"
                    src={`https://www.youtube.com/embed/${problem.videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <p className="text-zinc-500 font-medium">No video tutorial available for this problem.</p>
                )}
              </div>
            )}

            {activeTab === "submissions" && (
              <div className="space-y-4">
                {submissions.length === 0 ? (
                  <p className="text-zinc-500 text-sm text-center py-10">No submissions yet.</p>
                ) : (
                  submissions.map((sub, i) => (
                    <div
                      key={sub._id || i}
                      onClick={() => {
                        setSelectedLang(sub.language);
                        setUserCode(sub.code);
                      }}
                      className="bg-zinc-900/40 border border-zinc-800/50 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:border-mainCol/50 hover:bg-white/5 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`text-[10px] font-black uppercase px-2 py-1 rounded ${sub.status === 'Accepted' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'
                          }`}>
                          {sub.status}
                        </span>
                        <span className="text-zinc-400 text-xs font-mono">{new Date(sub.createdAt).toLocaleString()}</span>
                      </div>
                      <span className="text-mainCol text-xs font-bold uppercase tracking-widest">{sub.language}</span>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        {/* Pass results and isRunning state to the Editor */}
        <CodeArenaEditor
          code={userCode}
          selectedLang={selectedLang}
          onChange={setUserCode}
          slug={slug}
          results={results}
          isRunning={isRunning}
          setOpen={setOpen}
          setTempLang={setTempLang}
        />
      </main>

      {/* language change confirmation */}

      <AlertDialog open={open} onOpenChange={setOpen}>
        {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              Changing the programming language will delete your current code.
              Are you sure you want to continue?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancel}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirm}>
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
