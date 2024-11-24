"use client";

import {SubMenuItem} from "@/types/MenusTypes";
import Link from "next/link";

type Props = {
    items: SubMenuItem;
};

export default function MenuFinal({items}: Props) {
    return (
        <li>
            <button className="w-full text-left px-4 py-2 rounded-md">
                <Link href={items.url} className="flex gap-2 items-center">
                    {items.title}
                </Link>
            </button>
        </li>
    );
}
