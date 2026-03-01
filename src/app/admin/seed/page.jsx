"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle, Database, CheckCircle2, XCircle, Loader2, ArrowLeft } from "lucide-react";
import api from "@/lib/api";

export default function SeedPage() {
    const router = useRouter();
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const [result, setResult] = useState(null);
    const [confirmed, setConfirmed] = useState(false);

    const handleSeed = async () => {
        setStatus("loading");
        try {
            const res = await api.get("/seed");
            setResult(res.data);
            setStatus("success");
        } catch (err) {
            setResult({ error: err?.response?.data?.error || "Unexpected error occurred." });
            setStatus("error");
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6">
            <div className="w-full max-w-lg">

                {/* Card */}
                <div className="bg-zinc-900/60 border border-white/8 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl">

                    {/* Header */}
                    <div className="bg-rose-500/10 border-b border-rose-500/20 px-8 py-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center flex-shrink-0">
                            <Database size={22} className="text-rose-400" />
                        </div>
                        <div>
                            <h1 className="text-zinc-100 font-bold text-lg">Seed Database</h1>
                            <p className="text-rose-400 text-sm font-medium">Destructive Operation</p>
                        </div>
                    </div>

                    <div className="px-8 py-7 space-y-6">

                        {/* Idle / Confirm State */}
                        {status === "idle" && (
                            <>
                                {/* Warning Box */}
                                <div className="bg-amber-500/8 border border-amber-500/25 rounded-xl p-5 flex gap-4">
                                    <AlertTriangle size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
                                    <div className="space-y-2">
                                        <p className="text-amber-300 font-semibold text-sm">This will reset your entire database</p>
                                        <ul className="text-zinc-400 text-xs space-y-1 list-disc list-inside">
                                            <li>All existing problems will be <span className="text-rose-400 font-medium">permanently deleted</span></li>
                                            <li>The database will be re-seeded from <code className="text-zinc-300 bg-zinc-800 px-1 py-0.5 rounded text-[10px]">problems.js</code></li>
                                            <li>User progress and solved status will remain unaffected</li>
                                            <li>This action <span className="text-rose-400 font-medium">cannot be undone</span></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Confirmation Checkbox */}
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <div className="relative mt-0.5">
                                        <input
                                            type="checkbox"
                                            checked={confirmed}
                                            onChange={(e) => setConfirmed(e.target.checked)}
                                            className="peer sr-only"
                                        />
                                        <div className="w-5 h-5 rounded border border-zinc-600 peer-checked:border-rose-500 peer-checked:bg-rose-500/20 transition-colors flex items-center justify-center">
                                            {confirmed && <CheckCircle2 size={12} className="text-rose-400" />}
                                        </div>
                                    </div>
                                    <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed">
                                        I understand that this will <strong className="text-zinc-200">delete all current problems</strong> and replace them with data from <code className="text-zinc-300 bg-zinc-800 px-1 py-0.5 rounded text-[10px]">problems.js</code>. This cannot be undone.
                                    </span>
                                </label>

                                {/* Buttons */}
                                <div className="flex gap-3 pt-2">
                                    <button
                                        onClick={() => router.back()}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-zinc-700 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 transition-all text-sm font-medium"
                                    >
                                        <ArrowLeft size={15} />
                                        Go Back
                                    </button>
                                    <button
                                        onClick={handleSeed}
                                        disabled={!confirmed}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-all text-sm font-bold shadow-lg shadow-rose-900/30"
                                    >
                                        <Database size={15} />
                                        Seed Database
                                    </button>
                                </div>
                            </>
                        )}

                        {/* Loading State */}
                        {status === "loading" && (
                            <div className="py-10 flex flex-col items-center gap-4 text-center">
                                <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center">
                                    <Loader2 size={28} className="text-mainCol animate-spin" />
                                </div>
                                <div>
                                    <p className="text-zinc-100 font-semibold">Seeding database…</p>
                                    <p className="text-zinc-500 text-sm mt-1">This may take a few seconds</p>
                                </div>
                            </div>
                        )}

                        {/* Success State */}
                        {status === "success" && (
                            <div className="py-6 flex flex-col items-center gap-5 text-center">
                                <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 flex items-center justify-center">
                                    <CheckCircle2 size={28} className="text-emerald-400" />
                                </div>
                                <div>
                                    <p className="text-emerald-400 font-bold text-lg">Seeded Successfully!</p>
                                    {result && (
                                        <p className="text-zinc-400 text-sm mt-2">
                                            {result.insertedCount !== undefined
                                                ? <><span className="text-zinc-100 font-semibold">{result.insertedCount}</span> problems inserted into the database.</>
                                                : JSON.stringify(result)}
                                        </p>
                                    )}
                                </div>
                                <button
                                    onClick={() => router.push("/problems")}
                                    className="px-6 py-2.5 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-600/30 transition-all text-sm font-medium"
                                >
                                    View Problems →
                                </button>
                            </div>
                        )}

                        {/* Error State */}
                        {status === "error" && (
                            <div className="py-6 flex flex-col items-center gap-5 text-center">
                                <div className="w-16 h-16 rounded-2xl bg-rose-500/15 flex items-center justify-center">
                                    <XCircle size={28} className="text-rose-400" />
                                </div>
                                <div>
                                    <p className="text-rose-400 font-bold text-lg">Seeding Failed</p>
                                    <p className="text-zinc-400 text-sm mt-2">{result?.error || "An unexpected error occurred."}</p>
                                </div>
                                <button
                                    onClick={() => { setStatus("idle"); setConfirmed(false); setResult(null); }}
                                    className="px-6 py-2.5 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-300 hover:bg-zinc-700 transition-all text-sm font-medium"
                                >
                                    Try Again
                                </button>
                            </div>
                        )}

                    </div>
                </div>

                {/* Footer note */}
                <p className="text-center text-zinc-600 text-xs mt-5">
                    Admin-only • Accessible at <code className="text-zinc-500">/admin/seed</code>
                </p>
            </div>
        </div>
    );
}
