"use client";

import {items} from "@/data/dataLinksSideBar";
import MenuFirst from "./sidebarItems/sidebar-menu-nivel-1";
import SidebarHeader from "./sidebarHeader/sidebarHeader";
import {useSidebar} from "../sidebar-provider";

const menuItems = items;

export default function Sidebar() {
    const {isOpenSidebar} = useSidebar();

    return (
        <>
            {isOpenSidebar && (
                <aside className="w-[20rem] h-full bg-gray-800 text-white fixed z-50 top-0 left-0 overflow-y-scroll">
                    <SidebarHeader />
                    <ul className="space-y-2 p-2">
                        {menuItems.map((item, i) => (
                            <MenuFirst key={i} items={item} />
                        ))}
                    </ul>
                </aside>
            )}
        </>
    );
}
