"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {Button} from "@/components/ui/button";
import {Form} from "@/components/ui/form";
import {Eraser, Search} from "lucide-react";
import {DataCategory, DataEvolitionInitial, DataStatusSS} from "@/data/optionsForm";
import SelectForm from "../forms/select-form";
import InputForm from "../forms/input-form";
import {Popover, PopoverContent, PopoverTrigger} from "../ui/popover";

const FormSchema = z.object({
    status: z.string().min(1, {message: "Necessário selecionar um status"}),
    idSS: z.string().optional(),
    idHeritage: z.string().optional(),
    description: z.string().optional(),
    initialDate: z.string().optional(),
    finalDate: z.string().optional(),
    evolution: z.string().optional(),
    category: z.string().optional(),
});

const dataStatusSS = DataStatusSS;
const dataEvolutions = DataEvolitionInitial;
const dataCategories = DataCategory;

export default function SSFiltros() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            status: "1",
            idSS: "",
            idHeritage: "",
            description: "",
            initialDate: "",
            finalDate: "",
            evolution: "",
            category: "",
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data);
    }

    return (
        <div className="shadow-md p-2 rounded-lg">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <InputForm
                            control={form.control}
                            name="idSS"
                            label=""
                            placeholder="ID da SS"
                            isAutoComplete="off"
                            isDisabled={false}
                        />

                        <InputForm
                            control={form.control}
                            name="idHeritage"
                            label=""
                            placeholder="ID do patrimônio"
                            isAutoComplete="off"
                            isDisabled={false}
                        />

                        <SelectForm control={form.control} name="status" label="" options={dataStatusSS} />

                        <InputForm
                            control={form.control}
                            name="description"
                            label=""
                            placeholder="Descrição patrimônio/SS"
                            isAutoComplete="off"
                            isDisabled={false}
                        />
                    </div>
                    <Popover>
                        <PopoverTrigger className="w-full my-3" asChild>
                            <Button type="button" className="w-full">Mais opções de filtro</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <InputForm
                                control={form.control}
                                name="initialDate"
                                label=""
                                placeholder="Data inicial"
                                isAutoComplete="off"
                                isDisabled={false}
                            />

                            <InputForm
                                control={form.control}
                                name="finalDate"
                                label=""
                                placeholder="Data final"
                                isAutoComplete="off"
                                isDisabled={false}
                            />

                            <SelectForm
                                control={form.control}
                                name="evolution"
                                label=""
                                placeholder="Evolução"
                                options={dataEvolutions}
                            />

                            <SelectForm
                                control={form.control}
                                name="category"
                                label=""
                                placeholder="Categoria"
                                options={dataCategories}
                            />
                        </PopoverContent>
                    </Popover>
                    <div className="flex px-5 w-full items-center justify-around md:justify-end md:gap-5">
                        <Button type="button">
                            <Eraser /> Limpar
                        </Button>
                        <Button type="submit" className="bg-blue-500 hover:bg-blue-400">
                            <Search color="#FFF" />
                            Filtrar
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
