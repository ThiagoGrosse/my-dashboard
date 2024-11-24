"use client";

import {useSidebar} from "@/components/sidebar-provider";
import MyTooltip from "@/components/tooltip/tooltip";
import {SubMenuItem} from "@/types/MenusTypes";
import Link from "next/link";

type Props = {
    items: SubMenuItem;
};

export default function MenuFinal({items}: Props) {
    const {toggleSidebar} = useSidebar();

    const toggleSidebarMenu = () => {
        toggleSidebar(false);
    };

    return (
        <li>
            <MyTooltip label={items.label}>
                <div className="w-full text-left px-4 py-2 rounded-md">
                    <Link href={items.url} className="flex gap-2 items-center" onClick={toggleSidebarMenu}>
                        {items.title}
                    </Link>
                </div>
            </MyTooltip>
        </li>
    );
}
