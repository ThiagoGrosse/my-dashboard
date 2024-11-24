"use client";

import {SubMenuItem} from "@/types/MenusTypes";
import MenuFinal from "./siderbar-menu-nivel-3";
import Link from "next/link";
import {ChevronDown, ChevronUp} from "lucide-react";
import {useState} from "react";

type Props = {
    items: SubMenuItem;
};

export default function MenuSecond({items}: Props) {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const toggleSubmenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    return (
        <li>
            {!items.subMenu && (
                <button onClick={toggleSubmenu} className="w-full text-left px-4 py-2 rounded-md">
                    <Link href={items.url} className="flex gap-2 items-center">
                        {items.title}
                    </Link>
                </button>
            )}

            {items.subMenu && (
                <div>
                    <button onClick={toggleSubmenu} className="w-full text-left px-4 py-2 rounded-md">
                        <div className="flex gap-2 justify-between">
                            <div className="flex items-center gap-2">{items.title}</div>
                            {isSubMenuOpen ? <ChevronUp /> : <ChevronDown />}
                        </div>
                    </button>
                    <ul
                        className={`${
                            isSubMenuOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"
                        } overflow-hidden transition-all duration-300 ease-in-out space-y-2 ml-6 border-l border-gray-400`}
                    >
                        {items.subMenu.map((item, index) => (
                            <MenuFinal key={index} items={item} />
                        ))}
                    </ul>
                </div>
            )}
        </li>
    );
}
