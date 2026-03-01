"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import api from "@/lib/api";
import {
  Search, PlayCircle, ChevronRight, ChevronDown, Trophy,
  Filter, ChevronLeft, LayoutGrid, Zap, LogOut, User as UserIcon, CheckCircle2
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function ProblemsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // --- State ---
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [solvedProblems, setSolvedProblems] = useState([]);

  // --- Get Params from URL ---
  const currentDifficulty = searchParams.get("difficulty") || "All";
  const currentCategory = searchParams.get("category") || "All";

  // --- Fetch Logic ---
  const fetchProblems = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.append("limit", "1000"); // Fetch all problems for the accorded view
      if (currentDifficulty !== "All") params.append("difficulty", currentDifficulty);
      if (currentCategory !== "All") params.append("category", currentCategory);

      const response = await api.get(`/problems?${params.toString()}`);

      if (response.data.success) {
        setProblems(response.data.problems);
        if (response.data.solvedProblems) {
          setSolvedProblems(response.data.solvedProblems);
        }

        // Start with all categories collapsed
        if (response.data.problems.length > 0) {
          const initialExpanded = {};
          const categories = [...new Set(response.data.problems.map(p => p.category))];
          categories.forEach(c => initialExpanded[c] = false);
          setExpandedCategories(initialExpanded);
        }
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  }, [currentDifficulty, currentCategory]);

  useEffect(() => {
    fetchProblems();
  }, [fetchProblems]);

  // --- Navigation Helpers ---
  const updateParams = (newParams) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(newParams).forEach(([key, value]) => {
      if (value === "All" || value === "") params.delete(key);
      else params.set(key, value);
    });
    params.delete("page"); // Ensure no page param stays
    router.push(`/problems?${params.toString()}`);
  };


  const getDifficultyColor = (diff) => {
    const colors = {
      Easy: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
      Medium: "text-amber-400 bg-amber-400/10 border-amber-400/20",
      Hard: "text-rose-400 bg-rose-400/10 border-rose-400/20"
    };
    return colors[diff] || "text-zinc-400 bg-zinc-400/10 border-zinc-800";
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => {
      const isOpen = prev[category];
      // Close all, then open the clicked one (unless it was already open)
      const allClosed = Object.fromEntries(Object.keys(prev).map(k => [k, false]));
      return { ...allClosed, [category]: !isOpen };
    });
  };

  // Group problems by category
  const groupedProblems = problems.reduce((acc, problem) => {
    if (!acc[problem.category]) {
      acc[problem.category] = [];
    }
    acc[problem.category].push(problem);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 relative">
      {/* --- Navbar --- */}
      <Navbar />

      <div className="max-w-6xl mx-auto z-10 relative py-8 px-4 md:px-8">

        {/* Filters */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Difficulty Filter */}
            <select
              value={currentDifficulty}
              onChange={(e) => updateParams({ difficulty: e.target.value })}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl py-2 px-4 text-sm outline-none focus:border-mainCol cursor-pointer"
            >
              {["All", "Easy", "Medium", "Hard"].map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-zinc-900/20 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl overflow-hidden flex flex-col">

          {/* Main Area */}
          <div className="overflow-y-auto custom-scrollbar max-h-[calc(100vh-220px)] p-4 space-y-4">

            {loading ? (
              // Loading Skeleton
              <div className="w-full text-left bg-zinc-900/30 rounded-xl overflow-hidden">
                <div className="h-12 bg-zinc-800/50 w-full animate-pulse border-b border-white/5" />
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center px-6 py-4 border-b border-white/5 animate-pulse">
                    <div className="w-8 h-4 bg-zinc-800/80 rounded" />
                    <div className="flex-1 ml-6 h-4 bg-zinc-800/80 rounded" />
                    <div className="w-16 h-4 bg-zinc-800/80 rounded mr-6" />
                  </div>
                ))}
              </div>
            ) : (
              Object.keys(groupedProblems).map(category => (
                <div key={category} className="bg-zinc-900/30 border border-white/5 rounded-xl overflow-hidden transition-all duration-300">
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleCategory(category)}
                    className="w-full flex items-center justify-between px-6 py-4 bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <h3 className="text-zinc-100 font-bold uppercase tracking-wider text-sm">{category}</h3>
                      {(() => {
                        const total = groupedProblems[category].length;
                        const solved = groupedProblems[category].filter(p => solvedProblems.includes(p._id)).length;
                        return (
                          <span className={`${solved === total ? 'bg-emerald-500/10 text-emerald-500' : 'bg-white/10 text-zinc-400'} text-[10px] px-2 py-0.5 rounded-full font-mono font-bold tracking-widest`}>
                            {solved}/{total}
                          </span>
                        );
                      })()}
                    </div>
                    <motion.div
                      animate={{ rotate: expandedCategories[category] ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={18} className="text-zinc-500" />
                    </motion.div>
                  </button>

                  {/* Accordion Content */}
                  <AnimatePresence>
                    {expandedCategories[category] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <table className="w-full text-left border-t border-white/5 border-separate border-spacing-0">
                          <thead className="bg-[#0c0c0c]/80 backdrop-blur-md">
                            <tr className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold hidden md:table-row">
                              <th className="px-6 py-3 border-b border-white/5 w-[8%]">#</th>
                              <th className="px-6 py-3 border-b border-white/5 w-[52%]">Title</th>
                              <th className="px-6 py-3 border-b border-white/5 w-[15%]">Difficulty</th>
                              <th className="px-6 py-3 border-b border-white/5 w-[10%] text-center">Video</th>
                              <th className="px-6 py-3 border-b border-white/5 w-[15%] text-right">Link</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/[0.03]">
                            {groupedProblems[category].map((problem) => (
                              <tr
                                key={problem._id}
                                onClick={() => router.push(`/problems/${problem.slug}`)}
                                className="group hover:bg-white/[0.04] cursor-pointer transition-colors"
                              >
                                <td className="px-6 py-4 text-zinc-600 font-mono text-xs">{problem.order}</td>
                                <td className="px-6 py-4">
                                  <div className="flex items-center gap-2">
                                    {solvedProblems.includes(problem._id) && (
                                      <CheckCircle2 size={14} className="text-emerald-500" />
                                    )}
                                    <span className="text-zinc-200 font-semibold group-hover:text-mainCol transition-colors">
                                      {problem.title}
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4">
                                  <span className={`px-3 py-1 rounded-lg border text-[10px] font-bold uppercase ${getDifficultyColor(problem.difficulty)}`}>
                                    {problem.difficulty}
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                  {problem.videoId && (
                                    <PlayCircle size={18} className="mx-auto text-zinc-700 group-hover:text-red-500 transition-colors" />
                                  )}
                                </td>
                                <td className="px-6 py-4 text-right text-zinc-700 group-hover:text-mainCol">
                                  <ChevronRight size={18} className="inline group-hover:translate-x-1 transition-transform" />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))
            )}

            {/* Empty State */}
            {!loading && problems.length === 0 && (
              <div className="py-20 flex flex-col items-center justify-center text-zinc-500">
                <Search size={48} className="mb-4 opacity-20" />
                <p className="text-lg font-medium">No problems found</p>
                <p className="text-sm">Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}