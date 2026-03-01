"use client";

import * as React from "react";
import { PlusCircle, Edit, Users } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function AdminLayout({ children }) {
    const router = useRouter();
    const pathname = usePathname();

    const menuItems = [
        {
            text: "Add New Problem",
            icon: <PlusCircle size={18} />,
            path: "/admin/add-problem",
        },
        {
            text: "Modify Problem",
            icon: <Edit size={18} />,
            path: "/admin/modify-problem",
        },
        {
            text: "Users List",
            icon: <Users size={18} />,
            path: "/admin/users",
        },
    ];

    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex flex-col min-h-screen bg-[#09090b]">
            <Navbar />

            {/* Admin Sub-navigation */}
            <div className="w-full bg-[#121214] border-b border-zinc-800/80 sticky top-[73px] z-40 shadow-lg shadow-black/20">
                <div className="flex w-full px-4 md:px-8 overflow-x-auto no-scrollbar">
                    <div className="flex space-x-3 py-3 w-full justify-center md:justify-start">
                        {menuItems.map((item) => {
                            const isActive = pathname.startsWith(item.path);
                            return (
                                <button
                                    key={item.text}
                                    onClick={() => router.push(item.path)}
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap border ${isActive
                                            ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20 shadow-inner"
                                            : "bg-transparent text-zinc-400 border-transparent hover:text-white hover:bg-zinc-800/50 hover:border-zinc-700/50"
                                        }`}
                                >
                                    {item.icon}
                                    {item.text}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-grow w-full mx-auto p-4 md:p-6 lg:p-8">
                {children}
            </main>
        </div>
    );
}
