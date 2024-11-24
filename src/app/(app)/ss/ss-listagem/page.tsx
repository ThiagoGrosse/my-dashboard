"use client";

import CardSSListing from "@/components/cards/card-ss-listagem";
import SSFiltros from "@/components/filtros-ss/filtros-ss";
import TitlePage from "@/components/titlePage/title-page";
import {DataSS} from "@/data/optionsForm";

const dataSS = DataSS;

export default function SSListingPage() {
    return (
        <div className="flex flex-col">
            <TitlePage title="Listagem de SS" />
            <div className="p-2 mt-2">
                <SSFiltros />
            </div>
            <div className="py-5 px-5 mb-8">
                {dataSS.map((item, index) => (
                    <CardSSListing key={index} item={item} />
                ))}
            </div>
        </div>
    );
}
