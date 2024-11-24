"use client";

import {MenuItem} from "@/types/MenusTypes";
import MenuSecond from "./sidebar-menu-nivel-2";
import Link from "next/link";
import {ChevronDown, ChevronUp} from "lucide-react";
import {useState} from "react";
import {useSidebar} from "@/components/sidebar-provider";
import MyTooltip from "@/components/tooltip/tooltip";

type Props = {
    items: MenuItem;
};

export default function MenuFirst({items}: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {toggleSidebar} = useSidebar();

    const toggleSubmenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSidebarMenu = () => {
        toggleSidebar(false);
    };

    return (
        <li>
            {!items.subMenu && (
                <MyTooltip label={items.label}>
                    <div className="w-full text-left px-4 py-2 rounded-md">
                        <Link href={items.url} className="flex gap-2 items-center" onClick={toggleSidebarMenu}>
                            <items.icon />
                            {items.title}
                        </Link>
                    </div>
                </MyTooltip>
            )}

            {items.subMenu && (
                <div>
                    <MyTooltip label={items.label}>
                        <button onClick={toggleSubmenu} className="w-full text-left px-4 py-2 rounded-md">
                            <div className="flex gap-2 justify-between">
                                <div className="flex items-center gap-2">
                                    <items.icon />
                                    {items.title}
                                </div>
                                {isMenuOpen ? <ChevronUp /> : <ChevronDown />}
                            </div>
                        </button>
                    </MyTooltip>
                    <ul
                        className={`${
                            isMenuOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"
                        } overflow-hidden transition-all duration-300 ease-in-out space-y-2 ml-6 border-l border-gray-400`}
                    >
                        {items.subMenu.map((item, index) => (
                            <MenuSecond key={index} items={item} />
                        ))}
                    </ul>
                </div>
            )}
        </li>
    );
}
