"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {Button} from "@/components/ui/button";
import {Form} from "@/components/ui/form";
import InputForm from "@/components/forms/input-form";
import TitlePage from "@/components/titlePage/title-page";
import SelectForm from "@/components/forms/select-form";
import {Check, Undo2} from "lucide-react";
import {DataApplicant, DataCategory, DataHeritage, DataLocation, DataTypeSS, DataTypeUrgency} from "@/data/optionsForm";
import {SwitchForm} from "@/components/forms/switch-form";
import {ComboboxForm} from "@/components/forms/combobox-form";
import {TextareaForm} from "@/components/forms/textarea-form";
import {useToast} from "@/hooks/use-toast";
import {useRouter} from "next/navigation";

const FormSchema = z.object({
    serviceRequestDescription: z.string().max(100).min(10, {
        message: "Este campo precisa conter no mínimo 10 caracteres.",
    }),
    typeOfRequest: z.string().min(1, {message: "Campo obrigatório! Selecione uma opção"}),
    requestBy: z.string().optional(),
    deadHeritage: z.boolean().optional(),
    urgency: z.string().min(1, {message: "Campo obrigatório! Selecione uma opção"}),
    requester: z.string().min(1, {message: "Campo obrigatório! Informe um solicitante"}),
    location: z.string().optional(),
    heritage: z.string().min(1, {message: "Campo obrigatório! Informe um patrimônio"}),
    category: z.string().min(1, {message: "Campo obrigatório! Selecione uma categoria"}),
    servicesToBePerformed: z.string().min(1, {message: "Campo obrigatório! Descreva sua solicitação."}),
});

const optionsTypeOfRequest = DataTypeSS;
const optionsUrgency = DataTypeUrgency;
const optionsRequest = DataApplicant;
const optionsLocation = DataLocation;
const optionsHeritage = DataHeritage;
const optionsCategory = DataCategory;

export default function IncluedCalledPage() {
    const {toast} = useToast();
    const router = useRouter();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            serviceRequestDescription: "",
            typeOfRequest: "",
            requestBy: "",
            deadHeritage: false,
            urgency: "",
            requester: "",
            location: "",
            heritage: "",
            category: "",
            servicesToBePerformed: "",
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        const chamadoId = "12345";

        toast({
            title: "Chamado incluído com sucesso!",
            description: "O chamado foi incluído com sucesso.",
            duration: 2000,
        });

        router.push(`/ss/${chamadoId}`);
        console.log(data);
    }

    return (
        <div className="flex flex-col">
            <TitlePage title="Incluir Chamado" />
            <div className="py-10 px-5 mb-8">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-14">
                        {/* Descrição do chamado */}
                        <InputForm
                            control={form.control}
                            isDisabled={false}
                            label="Descrição da Solicitação de Serviço*"
                            name="serviceRequestDescription"
                            placeholder="Insira um título para sua solcitação"
                            description="Informe um título que descreva em poucas palavras a sua solicitação"
                            isAutoComplete="off"
                        />

                        {/* Tipo de solicitação */}
                        <SelectForm
                            control={form.control}
                            label="Tipo de Solicitação*"
                            name="typeOfRequest"
                            description="Selecione um tipo de solicitação"
                            options={optionsTypeOfRequest}
                        />

                        {/* Solicitado por */}
                        <InputForm
                            control={form.control}
                            isDisabled={false}
                            label="Solicitado por:"
                            name="requestBy"
                            placeholder="Informe o nome do responsável pelo chamado"
                            description="Caso necessário, informe quem é o responsável pelo chamado"
                            isAutoComplete="off"
                        />

                        {/* Patrimônio inoperante */}
                        <SwitchForm
                            control={form.control}
                            label="Patrimônio inoperante"
                            name="deadHeritage"
                            description="Selecione caso o patrimônio esteja inoperante"
                        />

                        {/* Urgência */}
                        <SelectForm
                            control={form.control}
                            label="Urgência*"
                            name="urgency"
                            description="Selecione a urgência da solicitação"
                            options={optionsUrgency}
                        />

                        {/* Solicitante */}
                        <ComboboxForm
                            control={form.control}
                            label="Solicitante*"
                            name="requester"
                            description="Informe um solicitante"
                            options={optionsRequest}
                            placeholder="Informe um solicitante"
                        />

                        {/* Localização */}
                        <ComboboxForm
                            control={form.control}
                            label="Localização"
                            name="location"
                            description="Selecione uma localização"
                            options={optionsLocation}
                            placeholder="Informe uma localização"
                        />

                        {/* Patrimônio */}
                        <ComboboxForm
                            control={form.control}
                            label="Patrimônio"
                            name="heritage"
                            description="Selecione o patrimônio"
                            options={optionsHeritage}
                            placeholder="Informe um patrimônio"
                        />

                        {/* Categorias */}
                        <SelectForm
                            control={form.control}
                            label="Categorias*"
                            name="category"
                            description="Selecione uma categoria"
                            options={optionsCategory}
                        />

                        {/* Descrição da solicitação */}
                        <TextareaForm
                            control={form.control}
                            name="servicesToBePerformed"
                            label="Descrição da solicitação*"
                            isDisabled={false}
                            isAutoComplete="off"
                            placeholder="Descreva sua solicitação"
                            description="Informe a descrição da solicitação que deseja realizar"
                            rows={6}
                        />

                        <div className="flex px-5 w-full items-center justify-around">
                            <Button type="button" variant="secondary">
                                <Undo2 /> Voltar
                            </Button>
                            <Button type="submit">
                                <Check color="#00ff00" />
                                Salvar
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}
