"use client";

import React, { useEffect, useState } from 'react';
import {
    Users, Shield, User, Search, RefreshCcw
} from 'lucide-react';
import api from '@/lib/api';

export default function AdminUsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('');
    const [updating, setUpdating] = useState(null);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await api.get('/admin/users');
            if (response.data?.success) {
                setUsers(response.data.users);
            }
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const toggleAdminRole = async (userId, currentIsAdmin) => {
        setUpdating(userId);
        try {
            const response = await api.patch('/admin/users', {
                userId,
                isAdmin: !currentIsAdmin
            });
            if (response.data?.success) {
                setUsers(prev => prev.map(u =>
                    u._id === userId ? { ...u, isAdmin: !currentIsAdmin } : u
                ));
            }
        } catch (e) {
            console.error(e);
            alert(e.response?.data?.error || "Error updating user role");
        } finally {
            setUpdating(null);
        }
    };

    const filteredUsers = users.filter(u =>
        u.username.toLowerCase().includes(filter.toLowerCase()) ||
        u.email.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="bg-[#09090b] text-zinc-200 font-sans p-2">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                        <Users size={24} className="text-indigo-400" />
                        User Management
                    </h1>
                    <p className="text-zinc-500 text-sm mt-1">Manage platform members and assignment roles.</p>
                </div>
                <div className="flex gap-3 items-center">
                    <div className="relative">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                        <input
                            type="text"
                            placeholder="Search users..."
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="pl-9 pr-4 py-2 bg-[#121214] border border-zinc-800 rounded-lg text-sm text-zinc-200 outline-none focus:border-indigo-500 w-64"
                        />
                    </div>
                    <button
                        onClick={fetchUsers}
                        className="p-2 bg-[#121214] border border-zinc-800 rounded-lg hover:bg-zinc-800 transition"
                    >
                        <RefreshCcw size={16} className={loading ? "animate-spin text-zinc-500" : "text-zinc-400"} />
                    </button>
                </div>
            </header>

            {/* Users Table */}
            <div className="bg-[#121214] border border-zinc-800 rounded-xl overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-[#161618] border-b border-zinc-800">
                            <tr>
                                <th className="px-6 py-4 text-[11px] font-bold text-zinc-400 uppercase tracking-wider w-[35%]">User</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-zinc-400 uppercase tracking-wider w-[25%]">Email</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-zinc-400 uppercase tracking-wider w-[15%]">Role</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-zinc-400 uppercase tracking-wider w-[15%]">Join Date</th>
                                <th className="px-6 py-4 text-right text-[11px] font-bold text-zinc-400 uppercase tracking-wider w-[10%]">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800/50">
                            {loading && users.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="py-12 text-center text-zinc-500">
                                        Loading users...
                                    </td>
                                </tr>
                            ) : filteredUsers.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="py-12 text-center text-zinc-500">
                                        No users found matching "{filter}".
                                    </td>
                                </tr>
                            ) : (
                                filteredUsers.map((u) => (
                                    <tr key={u._id} className="hover:bg-zinc-900/30 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 shadow-sm border border-white/5">
                                                    {u.isAdmin ? <Shield size={14} className="text-indigo-400" /> : <User size={14} />}
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-zinc-200 text-sm group-hover:text-white transition-colors">
                                                        {u.username}
                                                    </div>
                                                    <div className="text-[10px] text-zinc-500 font-mono tracking-wide mt-0.5">ID: {u._id.substring(u._id.length - 8)}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-zinc-400 group-hover:text-zinc-300">
                                            {u.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${u.isAdmin
                                                        ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                                                        : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                                                    }`}
                                            >
                                                {u.isAdmin ? <Shield size={10} /> : <User size={10} />}
                                                {u.isAdmin ? 'Admin' : 'Default'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-xs text-zinc-500 font-medium">
                                            {new Date(u.createdAt).toLocaleDateString(undefined, {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                disabled={updating === u._id}
                                                onClick={() => toggleAdminRole(u._id, u.isAdmin)}
                                                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors border ${u.isAdmin
                                                        ? 'bg-red-500/10 hover:bg-red-500/20 text-red-400 border-red-500/20'
                                                        : 'bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border-indigo-500/20'
                                                    } ${updating === u._id ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            >
                                                {updating === u._id
                                                    ? 'Updating...'
                                                    : u.isAdmin ? 'Demote' : 'Make Admin'
                                                }
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
