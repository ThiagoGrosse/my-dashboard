"use client";

import {usePathname} from "next/navigation";
import Link from "next/link";

export default function Breadcrumb() {
    const pathname = usePathname();
    const segments = pathname.split("/").filter((segment) => segment);

    return (
        <nav aria-label="breadcrumb" className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="text-blue-500 hover:underline">
                Home
            </Link>
            {segments.map((segment, index) => {
                const isLast = index === segments.length - 1;
                const path = `/${segments.slice(0, index + 1).join("/")}`;

                return (
                    <div key={path} className="flex items-center space-x-2">
                        <span className="text-gray-400">/</span>
                        {isLast ? (
                            <span className="text-gray-500 capitalize">{decodeURIComponent(segment)}</span>
                        ) : (
                            <Link href={path} className="text-blue-500 hover:underline capitalize">
                                {decodeURIComponent(segment)}
                            </Link>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}
