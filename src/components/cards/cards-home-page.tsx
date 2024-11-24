"use client";

import React from "react";

type Props = {
    children: React.ReactNode;
};
export default function CardHome({children}: Props) {
    return (
        <div className="flex items-center justify-center rounded-md bg-slate-600 w-40 h-20">
            <div className="flex flex-col justify-start ">
                <p className="text-sm leading-[0.25rem] text-white">Title</p>
                <h1 className="text-2xl text-orange-500 font-bold">{children}</h1>
            </div>
        </div>
    );
}
