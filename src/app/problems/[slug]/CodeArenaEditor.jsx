"use client";
import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { Code2, Terminal, ChevronUp, CheckCircle2, XCircle, Timer } from "lucide-react";

export default function CodeArenaEditor({ code, onChange, slug, examples, results, isRunning, selectedLang, setOpen, setTempLang }) {
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [progLang, setProgLang] = useState(['javascript', 'java', 'python'])

  const changeLanguage = (e) => {
    setTempLang(e.target.value)
    setOpen(true);
  }

  useEffect(() => {
    if (results?.status) {
      setConsoleOpen(true);
    }
  }, [results]);
  return (
    <div className="w-1/2 flex flex-col bg-[#1e1e1e]">
      {/* Editor Tab Header */}
      <div className="h-10 bg-[#252525] flex items-center px-4 justify-between border-b border-white/5">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-2 text-mainCol">
            <Code2 size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Solution</span>
          </div>
          <select value={selectedLang} onChange={(e) => changeLanguage(e)} className="border p-1 text-white font-bolder  bg-[#252525]">
            {progLang.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>


        {isRunning && (
          <div className="flex items-center gap-2 text-zinc-500 animate-pulse">
            <Timer size={12} />
            <span className="text-[9px] font-bold uppercase tracking-widest">Executing...</span>
          </div>
        )}
      </div>

      {/* Monaco Editor */}
      <div className="flex-1">
        <Editor
          height="80%"
          defaultLanguage='javascript'
          theme="vs-dark"
          value={code}
          onChange={onChange}
          language={selectedLang}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            fontFamily: "'Fira Code', monospace",
            padding: { top: 20 },
            automaticLayout: true,
            scrollBeyondLastLine: false,
            scrollbar: {
              verticalScrollbarSize: 8,
              horizontalScrollbarSize: 8,
            }
          }}
        />
      </div>

      {/* Result Status & Console */}
      {results?.status && (
        <div className="bg-[#181818] border-t border-white/5 flex flex-col z-10 w-full shrink-0">
          <div
            className="h-12 flex items-center px-4 justify-between cursor-pointer hover:bg-white/5 transition-colors"
            onClick={() => setConsoleOpen(!consoleOpen)}
          >
            <div className="flex items-center gap-3">
              <button className="text-zinc-500 hover:text-white transition-colors">
                <Terminal size={14} />
              </button>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mr-2">Console</span>
              {results.status === "Accepted" ? (
                <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                  <CheckCircle2 size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Accepted
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-400 bg-red-500/10 px-2 py-1 rounded">
                  <XCircle size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    {results.status}
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3">
              <ChevronUp
                size={16}
                className={`text-zinc-500 transition-transform ${consoleOpen ? "rotate-180" : ""}`}
              />
            </div>
          </div>

          {consoleOpen && (
            <div className="p-4 border-t border-white/5 overflow-y-auto custom-scrollbar h-[200px] bg-[#0a0a0a]">
              {/* Render details based on result type */}
              {results.status === "Runtime Error" && (
                <div className="text-red-400 font-mono text-xs whitespace-pre-wrap p-3 bg-red-500/5 border border-red-500/20 rounded-lg">
                  {results.message}
                </div>
              )}
              {results.status === "Wrong Answer" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-red-400 text-[11px] font-bold uppercase tracking-widest bg-red-500/5 px-3 py-1.5 rounded-md inline-block">
                    {results.message}
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                      <span className="text-zinc-500 block text-[10px] uppercase mb-1 font-bold">Input</span>
                      <span className="text-zinc-200 font-mono text-xs">{JSON.stringify(results.input)}</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                      <span className="text-zinc-500 block text-[10px] uppercase mb-1 font-bold">Expected Output</span>
                      <span className="text-emerald-400 font-mono text-xs">{JSON.stringify(results.expected)}</span>
                    </div>
                    <div className="bg-rose-500/5 p-3 rounded-lg border border-rose-500/20">
                      <span className="text-rose-500 block text-[10px] uppercase mb-1 font-bold">Actual Output</span>
                      <span className="text-rose-400 font-mono text-xs">{JSON.stringify(results.actual)}</span>
                    </div>
                  </div>
                </div>
              )}
              {results.status === "Accepted" && (
                <div className="bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-lg flex items-center justify-center flex-col gap-2">
                  <CheckCircle2 size={32} className="text-emerald-500 mb-2" />
                  <span className="text-emerald-400 font-bold uppercase tracking-widest text-[11px]">
                    All test cases passed successfully!
                  </span>
                  {results.runTime && results.runTime !== "N/A" && (
                    <span className="text-emerald-500/70 font-mono text-xs">Runtime: {results.runTime}</span>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}




    </div>
  );
}