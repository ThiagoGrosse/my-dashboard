"use client";

import {useSidebar} from "@/components/sidebar-provider";
import {Smile} from "lucide-react";

export default function SidebarHeader() {
    const {toggleSidebar} = useSidebar();

    const toggleSidebarMenu = () => {
        toggleSidebar(false);
    };

    return (
        <div className="w-full h-16 flex items-center justify-start pl-6 border-b-2 border-slate-500">
            <div className="flex gap-2 items-center">
                <Smile />
                <h2>Dashboard</h2>
            </div>
            <button type="button" className="absolute right-5 p-2" title="Fechar Menu" onClick={toggleSidebarMenu}>
                x
            </button>
        </div>
    );
}
