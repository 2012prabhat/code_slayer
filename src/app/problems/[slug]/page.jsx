"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "@/lib/api";
import ArenaNavbar from "./ArenaNavbar";
import ProblemDescription from "./ProblemDescription";
import CodeArenaEditor from "./CodeArenaEditor";

export default function ProblemSlugPage() {
  const { slug } = useParams();
  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userCode, setUserCode] = useState("");
  const [activeTab, setActiveTab] = useState("description");

  // --- Execution State ---
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState([]);
  const [selectedLang, setSelectedLang] = useState('javascript');

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const res = await api.get(`/problems/${slug}`);
        if (res.data?.problem) {
          setProblem(res.data.problem);
          setUserCode(res.data.problem.starterCodes[selectedLang] || "");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProblem();
  }, [slug]);

  const handleRunCode = async () => {
    setIsRunning(true);
    try {
      const resp = await api.post(`/run`, {
        slug,
        code: userCode,
        language: "javascript",
      });
      const data = resp.data;
      setResults(data);
    } catch (err) {
      setResults({
        status:err?.response?.data?.error
      })
      console.log(err);
    }

    setIsRunning(false);
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
      {/* Pass handleRunCode to the Navbar */}
      <ArenaNavbar
        title={problem?.title}
        onRun={handleRunCode}
        isRunning={isRunning}
      />

      <main className="flex-1 flex overflow-hidden">
        <div className="w-1/2 border-r border-white/5 flex flex-col bg-[#0f0f0f]">
          {/* ... Tabs logic same as before ... */}
          <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
            {activeTab === "description" ? (
              <ProblemDescription problem={problem} />
            ) : (
              <div>Video...</div>
            )}
          </div>
        </div>

        {/* Pass results and isRunning state to the Editor */}
        <CodeArenaEditor
          code={userCode}
          onChange={setUserCode}
          slug={slug}
          results={results}
          isRunning={isRunning}
        />
      </main>
    </div>
  );
}
