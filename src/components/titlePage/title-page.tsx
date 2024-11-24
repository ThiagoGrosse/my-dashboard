"use client";

import MyBreadcrumb from "../breadcrumb/breadcrumb";

type Props = {
    title: string;
};

export default function TitlePage({title}: Props) {
    return (
        <div className="bg-slate-200 p-5 shadow-md mb-2 fixed z-20 top-16 w-full">
            <h1 className="text-2xl text-orange-500 font-semibold uppercase">{title}</h1>
            <MyBreadcrumb />
        </div>
    );
}
