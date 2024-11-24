"use client";

import {Check, ChevronsDown, CircleX, ClipboardCheck, Clock, Mail, Printer, Smartphone} from "lucide-react";
import {Button} from "../ui/button";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "../ui/collapsible";
import {useState} from "react";
import Link from "next/link";
import MyTooltip from "../tooltip/tooltip";

type dataSS = {
    idSS: number;
    typeSS: string;
    category: string;
    openBy: string;
    openingDate: string;
    closingDate: string;
    branch: string;
    applicant: string;
    location: string;
    typeEquip: string;
    designatedTechnician: string;
    title: string;
    urgency: string;
    status: string;
};

type Props = {
    item: dataSS;
};

export default function CardSSListing({item}: Props) {
    const [isCheckedTriagem, setIsCheckedTriagem] = useState(false);
    const [isScheduled, setIsScheduled] = useState(false);

    const handleClickTriagem = () => {
        setIsCheckedTriagem(!isCheckedTriagem);
    };

    const handleClickScheduled = () => {
        setIsScheduled(!isScheduled);
    };

    return (
        <div className="w-full my-5 shadow-lg shadow-slate-400 p-5 rounded bg-slate-100">
            <div className="flex flex-col md:flex-row md:justify-between border-b border-slate-400 pb-2">
                <div className="flex flex-col text-gray-400">
                    <div className="flex justify-between items-start mb-2">
                        <div className="text-xs flex flex-col items-center gap-1">
                            <span className="text-xs">Número da SS</span>
                            <p className="text-lg text-slate-700">{item.idSS}</p>
                        </div>
                        <div className="text-xs flex flex-col items-center gap-1">
                            <span className="text-xs">Triagem</span>
                            <div className="text-lg text-slate-700">
                                {isCheckedTriagem && (
                                    <button
                                        type="button"
                                        className="bg-blue-400 p-1 rounded-md"
                                        onClick={handleClickTriagem}
                                    >
                                        <Check color="#FFFFFF" strokeWidth={3} />
                                    </button>
                                )}
                                {!isCheckedTriagem && (
                                    <button
                                        type="button"
                                        className="bg-blue-400 p-1 rounded-md"
                                        onClick={handleClickTriagem}
                                    >
                                        <Check color="#FFFFFF" strokeWidth={3} />
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className="text-xs flex flex-col items-center gap-1">
                            <span className="text-xs">Agendar</span>
                            <div className="text-lg text-slate-700">
                                {isScheduled && (
                                    <button type="button" onClick={handleClickScheduled}>
                                        <Clock strokeWidth={2} size={32} color="#F04D00" />
                                    </button>
                                )}
                                {!isScheduled && (
                                    <button type="button" onClick={handleClickScheduled}>
                                        <Clock strokeWidth={2} size={32} color="#4A4A4A" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col py-2">
                        <Link href="/" className="text-blue-500">
                            {item.title}
                        </Link>
                        <div className="flex justify-between py-2">
                            <span>{item.typeEquip}</span>
                            <div className="text-xs flex flex-col">
                                <span>
                                    Categoria:
                                    <span className="text-slate-700 pl-1">{item.category}</span>
                                </span>
                                <span>
                                    Status:
                                    <span className="text-slate-700 pl-1">{item.status}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex flex-col justify-between items-end md:w-64">
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex flex-col items-center gap-1">
                            <Smartphone color="#818181" />
                            <span className="text-xs text-gray-700">SMS</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <Mail color="#818181" />
                            <span className="text-xs text-gray-700">E-mail</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <Printer color="#818181" />
                            <span className="text-xs text-gray-700">Impressora</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <CircleX color="#FF0000" />
                            <span className="text-xs text-gray-700">Excluir</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end w-full">
                        <span className="text-xs text-gray-700">Abertura: {item.openingDate}</span>
                        <span className="text-xs text-gray-700">Fechamento: {item.closingDate}</span>
                    </div>
                </div>
            </div>
            <div className="mt-2 flex gap-2 items-start justify-between">
                <div className="text-xs text-gray-400">
                    <span>Aberto por</span>
                    <p className="text-slate-700 text-ellipsis text-nowrap">{item.openBy}</p>
                </div>
                <div className="text-xs text-gray-400">
                    <span>Técnico</span>
                    <p className="text-slate-700 text-ellipsis text-nowrap">{item.designatedTechnician}</p>
                </div>
                <div className="hidden md:flex md:flex-col justify-center items-center">
                    <span className="text-xs text-gray-400">Encerrar</span>
                    <ClipboardCheck />
                </div>
            </div>
        </div>
    );
}
