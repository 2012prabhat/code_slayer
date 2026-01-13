"use client";
import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Code2, Terminal, ChevronUp, CheckCircle2, XCircle, Timer } from "lucide-react";

export default function CodeArenaEditor({ code, onChange, slug, examples, results, isRunning }) {
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [progLang,setProgLang] = useState(['javascript','java','python'])


  return (
    <div className="w-1/2 flex flex-col bg-[#1e1e1e]">
      {/* Editor Tab Header */}
      <div className="h-10 bg-[#252525] flex items-center px-4 justify-between border-b border-white/5">
      <div className="flex justify-between w-full">
 <div className="flex items-center gap-2 text-mainCol">
          <Code2 size={14} />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Solution</span>
        </div>
        <select name="" id="" className="border p-1 text-white font-bolder  bg-[#252525]">
          {progLang.map((m)=> <option key={m} value={m}>{m}</option>)}
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
          height="100%"
          defaultLanguage="javascript"
          theme="vs-dark"
          value={code}
          onChange={onChange}
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

{/* Result Status */}
{results?.status && (
  <div className="h-12 bg-[#181818] border-t border-white/5 flex items-center px-4">
    {results.status === "Accepted" ? (
      <div className="flex items-center gap-2 text-green-400">
        <CheckCircle2 size={14} />
        <span className="text-[11px] font-bold uppercase tracking-widest">
          Accepted
        </span>
      </div>
    ) : (
      <div className="flex items-center gap-2 text-red-400">
        <XCircle size={14} />
        <span className="text-[11px] font-bold uppercase tracking-widest">
          Failed
        </span>
      </div>
    )}

    {results.message && (
      <span className="ml-4 text-[11px] text-zinc-400">
        {results.message}
      </span>
    )}
  </div>
)}

    
    </div>
  );
}