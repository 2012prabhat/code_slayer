"use client";
import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Code2, Save, Globe } from 'lucide-react';
import api from '@/lib/api';

export default function AdminProblemPage() {
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        difficulty: "Easy",
        category: "",
        order: 0,
        videoId: "",
        handlerFunction: "",
        description: "",
        constraints: [""],
        testCases: [{ input: "", output: "" }],
        examples: [{ id: 1, inputText: "", outputText: "", explanation: "", image: "" }],
        starterCodes: {
            javascript: "",
            python: "",
            java: ""
        }
    });

    const [saving, setSaving] = useState(false);
    const [orderLoading, setOrderLoading] = useState(true);

    // Auto-calculate next available order number
    useEffect(() => {
        const fetchNextOrder = async () => {
            try {
                const res = await api.get('/problems?limit=1000');
                if (res.data?.problems?.length > 0) {
                    const maxOrder = Math.max(...res.data.problems.map(p => p.order || 0));
                    setFormData(prev => ({ ...prev, order: maxOrder + 1 }));
                } else {
                    setFormData(prev => ({ ...prev, order: 1 }));
                }
            } catch (e) {
                console.error('Could not fetch order', e);
            } finally {
                setOrderLoading(false);
            }
        };
        fetchNextOrder();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Auto-generate slug from title if title is changed
        if (name === "title") {
            const slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
            setFormData(prev => ({ ...prev, title: value, slug }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const addConstraint = () => setFormData(p => ({ ...p, constraints: [...p.constraints, ""] }));
    const removeConstraint = (index) => {
        const newC = formData.constraints.filter((_, i) => i !== index);
        setFormData(p => ({ ...p, constraints: newC }));
    };

    const addTestCase = () => setFormData(p => ({ ...p, testCases: [...p.testCases, { input: "", output: "" }] }));
    const removeTestCase = (index) => {
        const newT = formData.testCases.filter((_, i) => i !== index);
        setFormData(p => ({ ...p, testCases: newT }));
    };

    const addExample = () => setFormData(p => ({ ...p, examples: [...p.examples, { id: p.examples.length + 1, inputText: "", outputText: "", explanation: "", image: "" }] }));
    const removeExample = (index) => {
        const newE = formData.examples.filter((_, i) => i !== index);
        setFormData(p => ({ ...p, examples: newE }));
    };

    const handleSave = async () => {
        try {
            setSaving(true);
            const res = await api.post('/problems', formData);
            if (res.data?.success) {
                alert("Problem created successfully!");
                setFormData({
                    title: "", slug: "", difficulty: "Easy", category: "", order: 0,
                    videoId: "", handlerFunction: "",
                    description: "", constraints: [""],
                    examples: [{ id: 1, inputText: "", outputText: "", explanation: "", image: "" }],
                    testCases: [{ input: "", output: "" }],
                    starterCodes: { javascript: "", python: "", java: "" }
                });
            }
        } catch (e) {
            console.error(e);
            alert(e.response?.data?.error || "Error saving problem.");
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#09090b] text-zinc-200 flex font-sans p-2">
            {/* Main Content */}
            <div className="flex-1 overflow-y-auto">
                <header className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-2xl font-semibold text-white tracking-tight">Create Problem</h1>
                        <p className="text-zinc-500 text-sm">Configure your coding challenge details</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={handleSave}
                            disabled={saving}
                            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-lg font-medium transition shadow-lg shadow-indigo-900/20 disabled:opacity-50"
                        >
                            <Save size={18} /> {saving ? "Publishing..." : "Publish"}
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    {/* Left Column */}
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
                                        placeholder="e.g. Reverse Integer"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-zinc-500 uppercase mb-2">Slug (Auto-Generated)</label>
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
                                        placeholder="Problem description in HTML/Markdown..."
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
                                {formData.examples.map((ex, i) => (
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
                                                    value={ex.inputText}
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
                                                    value={ex.outputText}
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
                                                value={ex.explanation}
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

                            {/* Javascript */}
                            <div className="mb-4">
                                <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded uppercase tracking-widest mb-2 inline-block">JavaScript</span>
                                <textarea
                                    name="starterCodes.javascript"
                                    onChange={(e) => setFormData(p => ({ ...p, starterCodes: { ...p.starterCodes, javascript: e.target.value } }))}
                                    value={formData.starterCodes.javascript}
                                    className="w-full h-32 bg-[#09090b] text-indigo-300 p-5 rounded-lg font-mono text-sm border border-zinc-800 focus:ring-1 focus:ring-indigo-500 outline-none shadow-inner mb-4"
                                    placeholder="function main() { ... }"
                                />
                            </div>

                            {/* Python */}
                            <div className="mb-4">
                                <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded uppercase tracking-widest mb-2 inline-block">Python</span>
                                <textarea
                                    name="starterCodes.python"
                                    onChange={(e) => setFormData(p => ({ ...p, starterCodes: { ...p.starterCodes, python: e.target.value } }))}
                                    value={formData.starterCodes.python}
                                    className="w-full h-32 bg-[#09090b] text-indigo-300 p-5 rounded-lg font-mono text-sm border border-zinc-800 focus:ring-1 focus:ring-indigo-500 outline-none shadow-inner mb-4"
                                    placeholder="def main(): ..."
                                />
                            </div>

                            {/* Java */}
                            <div className="mb-4">
                                <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded uppercase tracking-widest mb-2 inline-block">Java</span>
                                <textarea
                                    name="starterCodes.java"
                                    onChange={(e) => setFormData(p => ({ ...p, starterCodes: { ...p.starterCodes, java: e.target.value } }))}
                                    value={formData.starterCodes.java}
                                    className="w-full h-32 bg-[#09090b] text-indigo-300 p-5 rounded-lg font-mono text-sm border border-zinc-800 focus:ring-1 focus:ring-indigo-500 outline-none shadow-inner mb-4"
                                    placeholder="class Solution { ... }"
                                />
                            </div>
                        </section>
                    </div>

                    {/* Right Column */}
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
                                    <input name="category" value={formData.category} onChange={handleChange} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 outline-none focus:border-indigo-500 text-sm" placeholder="e.g. Dynamic Programming" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-medium text-zinc-500 uppercase mb-2">
                                        Display Order {orderLoading && <span className="text-indigo-400 normal-case">(auto-calculating...)</span>}
                                    </label>
                                    <input
                                        type="number"
                                        name="order"
                                        value={formData.order}
                                        onChange={handleChange}
                                        disabled={orderLoading}
                                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 outline-none focus:border-indigo-500 text-sm disabled:opacity-50"
                                    />
                                    <p className="text-[10px] text-zinc-600 mt-1">Auto-set to next available slot. You can change it manually.</p>
                                </div>
                                <div>
                                    <label className="block text-[11px] font-medium text-zinc-500 uppercase mb-2">Video Solution ID (Youtube)</label>
                                    <input name="videoId" value={formData.videoId} onChange={handleChange} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 outline-none focus:border-indigo-500 text-sm" placeholder="e.g. dQw4w9WgXcQ" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-medium text-zinc-500 uppercase mb-2">Handler Function Name</label>
                                    <input name="handlerFunction" value={formData.handlerFunction} onChange={handleChange} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 outline-none focus:border-indigo-500 text-sm" placeholder="e.g. twoSum" />
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
                                {formData.testCases.map((tc, i) => (
                                    <div key={i} className="flex flex-col gap-2 p-3 bg-zinc-900/40 border border-zinc-800/80 rounded-md">
                                        <div className="flex justify-between">
                                            <span className="text-[10px] text-zinc-500">Case {i + 1}</span>
                                            <button onClick={() => removeTestCase(i)} className="text-zinc-600 hover:text-red-400"><Trash2 size={12} /></button>
                                        </div>
                                        <input
                                            className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-xs outline-none focus:border-indigo-500"
                                            placeholder="Input JSON (e.g. [1,2,3])"
                                            value={tc.input}
                                            onChange={(e) => {
                                                const newT = [...formData.testCases];
                                                newT[i].input = e.target.value;
                                                setFormData({ ...formData, testCases: newT });
                                            }}
                                        />
                                        <input
                                            className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-xs outline-none focus:border-indigo-500"
                                            placeholder="Expected Output JSON"
                                            value={tc.output}
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
                                {formData.constraints.map((c, i) => (
                                    <div key={i} className="flex gap-2">
                                        <input
                                            className="flex-1 bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-xs outline-none focus:border-indigo-500 transition"
                                            placeholder={`Constraint ${i + 1}`}
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
            </div>
        </div>
    );
}
