"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LogOut, User as UserIcon, Shield } from "lucide-react";
import api from "@/lib/api";

export default function Navbar() {
    const router = useRouter();
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                try {
                    setUser(JSON.parse(storedUser));
                } catch (e) {
                    console.error("Failed to parse user data", e);
                }
            }
        }
    }, []);

    const handleLogout = async () => {
        try {
            await api.post('/auth/logout');
        } catch (e) {
            console.error("Logout error", e);
        }
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        router.push('/login');
    };

    return (
        <nav className="sticky top-0 z-50 bg-[#0c0c0c]/80 backdrop-blur-xl border-b border-white/5 px-4 md:px-8 py-4 flex items-center justify-between shadow-2xl w-full">
            <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => router.push('/problems')}
            >
                <h1 className="text-2xl md:text-3xl font-black text-white tracking-tighter  hidden sm:block">
                    Code
                </h1>
                <Image src="/logo.png" alt="Code Slayer Logo" width={32} height={32} />
                <h1 className="text-2xl md:text-3xl font-black text-mainCol tracking-tighter  hidden sm:block">
                    Slayer
                </h1>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
                {user && (
                    <div className="flex items-center gap-3 px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-full">
                        <div className="w-7 h-7 bg-mainCol/20 flex items-center justify-center rounded-full text-mainCol">
                            <UserIcon size={14} />
                        </div>
                        <span className="text-sm font-bold text-white hidden sm:block">{user.username}</span>
                    </div>
                )}
                {user?.isAdmin && (
                    <button
                        onClick={() => router.push('/admin')}
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border border-indigo-500/20 rounded-xl transition-colors text-sm font-semibold"
                    >
                        <Shield size={16} />
                        <span className="hidden sm:block">Admin Panel</span>
                    </button>
                )}

                {user && (
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 rounded-xl transition-colors text-sm font-semibold"
                    >
                        <LogOut size={16} />
                        <span className="hidden sm:block">Logout</span>
                    </button>
                )}
            </div>
        </nav>
    );
}
