"use client";
import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Code2, Save, Globe, Edit, RefreshCcw } from 'lucide-react';
import api from '@/lib/api';

export default function ModifyProblemPage() {
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(true);

    const [selectedSlug, setSelectedSlug] = useState(null);
    const [formData, setFormData] = useState(null);
    const [saving, setSaving] = useState(false);
    const [fetchingDetails, setFetchingDetails] = useState(false);

    // Fetch problems list on mount
    const fetchProblemsList = async () => {
        setLoading(true);
        try {
            const res = await api.get('/problems?limit=1000'); // large limit for admin
            if (res.data?.success) {
                setProblems(res.data.problems);
            }
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProblemsList();
    }, []);

    // Fetch single problem details
    const handleSelectProblem = async (slug) => {
        setSelectedSlug(slug);
        setFetchingDetails(true);
        try {
            const res = await api.get(`/problems/${slug}`);
            if (res.data?.problem) {
                setFormData(res.data.problem);
            }
        } catch (e) {
            console.error(e);
            alert("Error fetching problem details.");
            setSelectedSlug(null);
        } finally {
            setFetchingDetails(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "title") {
            const slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
            setFormData(prev => ({ ...prev, title: value, slug }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const addConstraint = () => setFormData(p => ({ ...p, constraints: [...(p.constraints || []), ""] }));
    const removeConstraint = (index) => {
        const newC = formData.constraints.filter((_, i) => i !== index);
        setFormData(p => ({ ...p, constraints: newC }));
    };

    const addTestCase = () => setFormData(p => ({ ...p, testCases: [...(p.testCases || []), { input: "", output: "" }] }));
    const removeTestCase = (index) => {
        const newT = formData.testCases.filter((_, i) => i !== index);
        setFormData(p => ({ ...p, testCases: newT }));
    };

    const addExample = () => setFormData(p => ({ ...p, examples: [...(p.examples || []), { id: (p.examples?.length || 0) + 1, inputText: "", outputText: "", explanation: "", image: "" }] }));
    const removeExample = (index) => {
        const newE = formData.examples.filter((_, i) => i !== index);
        setFormData(p => ({ ...p, examples: newE }));
    };

    const handleUpdate = async () => {
        try {
            setSaving(true);
            const res = await api.put(`/problems/${selectedSlug}`, formData);
            if (res.data?.success) {
                alert("Problem updated successfully!");
                fetchProblemsList(); // Refresh list just in case title/metadata changed
                setSelectedSlug(null);
                setFormData(null);
            }
        } catch (e) {
            console.error(e);
            alert(e.response?.data?.error || "Error updating problem.");
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="bg-[#09090b] text-zinc-200 font-sans p-2">
            <header className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-2xl font-semibold text-white tracking-tight">Modify Problem</h1>
                    <p className="text-zinc-500 text-sm">Select a problem to edit its details</p>
                </div>
                {formData && (
                    <div className="flex gap-3">
                        <button
                            onClick={() => { setSelectedSlug(null); setFormData(null); }}
                            className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-2 rounded-lg font-medium transition"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleUpdate}
                            disabled={saving}
                            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-lg font-medium transition shadow-lg shadow-indigo-900/20 disabled:opacity-50"
                        >
                            <Save size={18} /> {saving ? "Updating..." : "Update Changes"}
                        </button>
                    </div>
                )}
            </header>

            {!formData ? (
                // --- LIST VIEW ---
                <div className="bg-[#121214] border border-zinc-800 rounded-xl overflow-hidden shadow-xl">
                    <div className="p-4 border-b border-zinc-800 flex justify-between items-center bg-[#161618]">
                        <h2 className="text-sm font-bold text-zinc-300 uppercase tracking-widest">Added Problems</h2>
                        <button onClick={fetchProblemsList} className="text-zinc-500 hover:text-white transition">
                            <RefreshCcw size={16} className={loading ? "animate-spin" : ""} />
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-[#161618] border-b border-zinc-800">
                                <tr>
                                    <th className="px-6 py-4 text-[11px] font-bold text-zinc-400 uppercase tracking-wider w-[10%]">Order</th>
                                    <th className="px-6 py-4 text-[11px] font-bold text-zinc-400 uppercase tracking-wider w-[40%]">Title</th>
                                    <th className="px-6 py-4 text-[11px] font-bold text-zinc-400 uppercase tracking-wider w-[20%]">Difficulty</th>
                                    <th className="px-6 py-4 text-[11px] font-bold text-zinc-400 uppercase tracking-wider w-[20%]">Category</th>
                                    <th className="px-6 py-4 text-right text-[11px] font-bold text-zinc-400 uppercase tracking-wider w-[10%]">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800/50">
                                {loading && problems.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="py-12 text-center text-zinc-500">Loading problems...</td>
                                    </tr>
                                ) : problems.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="py-12 text-center text-zinc-500">No problems found.</td>
                                    </tr>
                                ) : (
                                    problems.map((p) => (
                                        <tr key={p._id} className="hover:bg-zinc-900/30 transition-colors group">
                                            <td className="px-6 py-4 text-zinc-500 font-mono text-sm">{p.order}</td>
                                            <td className="px-6 py-4">
                                                <div className="font-semibold text-zinc-200 text-sm group-hover:text-white transition-colors">
                                                    {p.title}
                                                </div>
                                                <div className="text-[10px] text-zinc-500 font-mono">/{p.slug}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${p.difficulty === 'Easy' ? 'bg-green-500/10 text-green-500' :
                                                    p.difficulty === 'Medium' ? 'bg-orange-500/10 text-orange-500' :
                                                        'bg-red-500/10 text-red-500'
                                                    }`}>
                                                    {p.difficulty}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-xs text-zinc-400 font-medium">
                                                {p.category}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button
                                                    onClick={() => handleSelectProblem(p.slug)}
                                                    disabled={fetchingDetails}
                                                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors border bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border-indigo-500/20 flex items-center justify-center gap-2 disabled:opacity-50 ml-auto"
                                                >
                                                    <Edit size={12} /> Edit
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (

                // --- EDITOR VIEW (Pulled from add-problem) ---
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    <div className="xl:col-span-2 space-y-6">
                        <section className="bg-[#121214] border border-zinc-800 rounded-xl p-6 shadow-xl">
                            <div className="flex items-center gap-2 mb-6 text-zinc-100 font-medium border-b border-zinc-800 pb-4">
                                <Globe size={18} className="text-indigo-400" />
                                General Information
                            </div>

                            <div className="space-y-5">
                                <div>
                                    <label className="block text-xs font-medium text-zinc-500 uppercase mb-2">Problem Title</label>
                                    <input
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2.5 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-zinc-200"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-zinc-500 uppercase mb-2">Slug</label>
                                    <input
                                        name="slug"
                                        value={formData.slug}
                                        readOnly
                                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-500 outline-none cursor-not-allowed"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-zinc-500 uppercase mb-2">Description</label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        rows={10}
                                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-zinc-300 font-sans leading-relaxed"
                                    />
                                </div>
                            </div>
                        </section>

                        <section className="bg-[#121214] border border-zinc-800 rounded-xl p-6 shadow-xl">
                            <div className="flex justify-between items-center mb-6 text-zinc-100 font-medium border-b border-zinc-800 pb-4">
                                <span className="flex items-center gap-2">
                                    <Globe size={18} className="text-indigo-400" />
                                    Problem Examples
                                </span>
                                <button onClick={addExample} className="p-1 hover:bg-zinc-800 text-indigo-400 rounded-md transition">
                                    <Plus size={18} />
                                </button>
                            </div>
                            <div className="space-y-6">
                                {formData.examples?.map((ex, i) => (
                                    <div key={i} className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs font-bold text-zinc-400 uppercase">Example {i + 1}</span>
                                            <button onClick={() => removeExample(i)} className="text-zinc-600 hover:text-red-400">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-[10px] font-medium text-zinc-500 uppercase mb-1">Input Text</label>
                                                <input
                                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-xs outline-none focus:border-indigo-500"
                                                    value={ex.inputText || ""}
                                                    onChange={(e) => {
                                                        const newE = [...formData.examples];
                                                        newE[i].inputText = e.target.value;
                                                        setFormData({ ...formData, examples: newE });
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-[10px] font-medium text-zinc-500 uppercase mb-1">Output Text</label>
                                                <input
                                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-xs outline-none focus:border-indigo-500"
                                                    value={ex.outputText || ""}
                                                    onChange={(e) => {
                                                        const newE = [...formData.examples];
                                                        newE[i].outputText = e.target.value;
                                                        setFormData({ ...formData, examples: newE });
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-medium text-zinc-500 uppercase mb-1">Explanation (Optional)</label>
                                            <input
                                                className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-xs outline-none focus:border-indigo-500"
                                                value={ex.explanation || ""}
                                                onChange={(e) => {
                                                    const newE = [...formData.examples];
                                                    newE[i].explanation = e.target.value;
                                                    setFormData({ ...formData, examples: newE });
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-medium text-zinc-500 uppercase mb-1">Image URL (Optional)</label>
                                            <input
                                                className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-xs outline-none focus:border-indigo-500"
                                                value={ex.image || ""}
                                                onChange={(e) => {
                                                    const newE = [...formData.examples];
                                                    newE[i].image = e.target.value;
                                                    setFormData({ ...formData, examples: newE });
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-[#121214] border border-zinc-800 rounded-xl p-6">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-2 text-zinc-100 font-medium">
                                    <Code2 size={18} className="text-indigo-400" />
                                    Starter Codes
                                </div>
                            </div>

                            <div className="mb-4">
                                <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded uppercase tracking-widest mb-2 inline-block">JavaScript</span>
                                <textarea
                                    name="starterCodes.javascript"
                                    onChange={(e) => setFormData(p => ({ ...p, starterCodes: { ...p.starterCodes, javascript: e.target.value } }))}
                                    value={formData.starterCodes?.javascript || ""}
                                    className="w-full h-32 bg-[#09090b] text-indigo-300 p-5 rounded-lg font-mono text-sm border border-zinc-800 outline-none mb-4"
                                />
                            </div>

                            <div className="mb-4">
                                <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded uppercase tracking-widest mb-2 inline-block">Python</span>
                                <textarea
                                    name="starterCodes.python"
                                    onChange={(e) => setFormData(p => ({ ...p, starterCodes: { ...p.starterCodes, python: e.target.value } }))}
                                    value={formData.starterCodes?.python || ""}
                                    className="w-full h-32 bg-[#09090b] text-indigo-300 p-5 rounded-lg font-mono text-sm border border-zinc-800 outline-none mb-4"
                                />
                            </div>

                            <div className="mb-4">
                                <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded uppercase tracking-widest mb-2 inline-block">Java</span>
                                <textarea
                                    name="starterCodes.java"
                                    onChange={(e) => setFormData(p => ({ ...p, starterCodes: { ...p.starterCodes, java: e.target.value } }))}
                                    value={formData.starterCodes?.java || ""}
                                    className="w-full h-32 bg-[#09090b] text-indigo-300 p-5 rounded-lg font-mono text-sm border border-zinc-800 outline-none mb-4"
                                />
                            </div>
                        </section>
                    </div>

                    <div className="space-y-6">
                        <section className="bg-[#121214] border border-zinc-800 rounded-xl p-6">
                            <h2 className="text-sm font-semibold mb-6 text-zinc-100 uppercase tracking-tighter">Properties</h2>
                            <div className="space-y-5">
                                <div>
                                    <label className="block text-[11px] font-medium text-zinc-500 uppercase mb-2">Difficulty</label>
                                    <select name="difficulty" value={formData.difficulty} onChange={handleChange} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 outline-none focus:border-indigo-500 text-sm">
                                        <option className="bg-zinc-900 text-green-500">Easy</option>
                                        <option className="bg-zinc-900 text-orange-500">Medium</option>
                                        <option className="bg-zinc-900 text-red-500">Hard</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[11px] font-medium text-zinc-500 uppercase mb-2">Category</label>
                                    <input name="category" value={formData.category} onChange={handleChange} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 outline-none focus:border-indigo-500 text-sm" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-medium text-zinc-500 uppercase mb-2">Display Order</label>
                                    <input type="number" name="order" value={formData.order} onChange={handleChange} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 outline-none focus:border-indigo-500 text-sm" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-medium text-zinc-500 uppercase mb-2">Video Solution ID (Youtube)</label>
                                    <input name="videoId" value={formData.videoId || ""} onChange={handleChange} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 outline-none focus:border-indigo-500 text-sm" placeholder="e.g. dQw4w9WgXcQ" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-medium text-zinc-500 uppercase mb-2">Handler Function Name</label>
                                    <input name="handlerFunction" value={formData.handlerFunction || ""} onChange={handleChange} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 outline-none focus:border-indigo-500 text-sm" placeholder="e.g. twoSum" />
                                </div>
                            </div>
                        </section>

                        <section className="bg-[#121214] border border-zinc-800 rounded-xl p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-sm font-semibold text-zinc-100 uppercase tracking-tighter">Test Cases</h2>
                                <button onClick={addTestCase} className="p-1 hover:bg-zinc-800 text-indigo-400 rounded-md transition">
                                    <Plus size={18} />
                                </button>
                            </div>
                            <div className="space-y-4">
                                {formData.testCases?.map((tc, i) => (
                                    <div key={i} className="flex flex-col gap-2 p-3 bg-zinc-900/40 border border-zinc-800/80 rounded-md">
                                        <div className="flex justify-between">
                                            <span className="text-[10px] text-zinc-500">Case {i + 1}</span>
                                            <button onClick={() => removeTestCase(i)} className="text-zinc-600 hover:text-red-400"><Trash2 size={12} /></button>
                                        </div>
                                        <input
                                            className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-xs outline-none focus:border-indigo-500"
                                            placeholder="Input JSON (e.g. [1,2,3])"
                                            value={tc.input || ""}
                                            onChange={(e) => {
                                                const newT = [...formData.testCases];
                                                newT[i].input = e.target.value;
                                                setFormData({ ...formData, testCases: newT });
                                            }}
                                        />
                                        <input
                                            className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-xs outline-none focus:border-indigo-500"
                                            placeholder="Expected Output JSON"
                                            value={tc.output || ""}
                                            onChange={(e) => {
                                                const newT = [...formData.testCases];
                                                newT[i].output = e.target.value;
                                                setFormData({ ...formData, testCases: newT });
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-[#121214] border border-zinc-800 rounded-xl p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-sm font-semibold text-zinc-100 uppercase tracking-tighter">Constraints</h2>
                                <button onClick={addConstraint} className="p-1 hover:bg-zinc-800 text-indigo-400 rounded-md transition">
                                    <Plus size={18} />
                                </button>
                            </div>
                            <div className="space-y-3">
                                {formData.constraints?.map((c, i) => (
                                    <div key={i} className="flex gap-2">
                                        <input
                                            className="flex-1 bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-xs outline-none focus:border-indigo-500 transition"
                                            value={c}
                                            onChange={(e) => {
                                                const newC = [...formData.constraints];
                                                newC[i] = e.target.value;
                                                setFormData({ ...formData, constraints: newC });
                                            }}
                                        />
                                        <button onClick={() => removeConstraint(i)} className="text-zinc-600 hover:text-red-400 transition">
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            )}
        </div>
    );
}
