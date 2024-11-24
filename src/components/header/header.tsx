"use client";

import {Menu} from "lucide-react";
import {useSidebar} from "../sidebar-provider";
import {MenuHeader} from "./components/menu-header";

export default function Header() {
    const {toggleSidebar} = useSidebar();

    const openSidebar = () => {
        toggleSidebar(true);
    };

    return (
        <nav className="h-16 p-5 w-full flex justify-between items-center bg-blue-700 text-white fixed z-30">
            <button type="button" onClick={openSidebar}>
                <Menu />
            </button>

            <MenuHeader />
        </nav>
    );
}
