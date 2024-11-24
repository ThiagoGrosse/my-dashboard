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
import {
    DataApplicant,
    DataCategory,
    DataCustomerService,
    DataEvolitionInitial,
    DataHeritage,
    DataLocation,
    DataTrend,
    DataTypeSS,
    DataTypeUrgency,
} from "@/data/optionsForm";
import {SwitchForm} from "@/components/forms/switch-form";
import {ComboboxForm} from "@/components/forms/combobox-form";
import {TextareaForm} from "@/components/forms/textarea-form";
import {useToast} from "@/hooks/use-toast";
import {useRouter} from "next/navigation";
import {InputPhoneForm} from "@/components/forms/inputOTP-form";

const FormSchema = z.object({
    serviceRequestDescription: z.string().min(10, {
        message: "Este campo precisa conter no mínimo 10 caracteres.",
    }),
    typeOfRequest: z.string().max(100).min(1, {message: "Campo obrigatório! Selecione uma opção"}),
    customerService: z.string().optional(),
    dateHourRequest: z.string().optional(),
    externalRequest: z.string().optional(),
    deadHeritage: z.boolean().optional(),
    urgency: z.string().min(1, {message: "Campo obrigatório! Selecione uma opção"}),
    trend: z.string().min(1, {message: "Campo obrigatório! Selecione uma opção"}),
    evolution: z.string().min(1, {message: "Campo obrigatório! Selecione uma opção"}),
    authorizedBy: z.string().optional(),
    requester: z.string().min(1, {message: "Campo obrigatório! Informe um solicitante"}),
    location: z.string().optional(),
    heritage: z.string().min(1, {message: "Campo obrigatório! Informe um patrimônio"}),
    category: z.string().min(1, {message: "Campo obrigatório! Selecione uma categoria"}),
    requestBy: z.string().optional(),
    numberPhone: z.string().optional(),
    servicesToBePerformed: z.string().min(1, {message: "Campo obrigatório! Descreva sua solicitação."}),
    observation: z.string().optional(),
});

const optionsTypeOfRequest = DataTypeSS;
const optionsUrgency = DataTypeUrgency;
const optionsRequest = DataApplicant;
const optionsLocation = DataLocation;
const optionsHeritage = DataHeritage;
const optionsCategory = DataCategory;
const optionCustomerService = DataCustomerService;
const optionTrend = DataTrend;
const optionsEvolutions = DataEvolitionInitial;

export default function IncludeSSPage() {
    const {toast} = useToast();
    const router = useRouter();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            serviceRequestDescription: "",
            typeOfRequest: "",
            customerService: "",
            requestBy: "",
            deadHeritage: false,
            urgency: "",
            requester: "",
            location: "",
            heritage: "",
            category: "",
            servicesToBePerformed: "",
            dateHourRequest: "",
            externalRequest: "",
            trend: "",
            evolution: "",
            authorizedBy: "",
            numberPhone: "",
            observation: "",
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        const chamadoId = "12345";

        toast({
            title: "Solicitação incluído com sucesso!",
            description: "A sua solicitação foi incluída com sucesso.",
            duration: 2000,
        });

        router.push(`/ss/${chamadoId}`);
        console.log(data);
    }

    return (
        <div className="flex flex-col">
            <TitlePage title="Incluir nova SS" />
            <div className="py-10 px-5 mb-8">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-14">
                        {/* Descrição da Solicitação de Serviço */}
                        <InputForm
                            control={form.control}
                            isDisabled={false}
                            label="Descrição da Solicitação de Serviço*"
                            name="serviceRequestDescription"
                            placeholder="Insira um título para sua solcitação"
                            description="Informe um título que descreva em poucas palavras a sua solicitação"
                            isAutoComplete="off"
                        />

                        {/* Tipo de Solicitação */}
                        <SelectForm
                            control={form.control}
                            label="Tipo de Solicitação*"
                            name="typeOfRequest"
                            description="Selecione um tipo de solicitação"
                            isDisabled={false}
                            options={optionsTypeOfRequest}
                        />

                        {/* Atendimento */}
                        <SelectForm
                            control={form.control}
                            label="Atendimento"
                            name="customerService"
                            description="Selecione um tipo de atendimento"
                            options={optionCustomerService}
                        />

                        {/* Data e hora do chamado */}
                        <InputForm
                            control={form.control}
                            label="Data e Hora do chamado"
                            name="dateHourRequest"
                            description="Selecione a data e hora do chamado"
                            isDisabled={false}
                            isAutoComplete="off"
                        />

                        {/* SS Externa */}
                        <InputForm
                            control={form.control}
                            label="SS Externa"
                            name="externalRequest"
                            description="Informe o código da solicitação externa"
                            isDisabled={false}
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

                        {/* Tendência */}
                        <SelectForm
                            control={form.control}
                            label="Tendência*"
                            name="trend"
                            description="Selecione a tendência da solicitação"
                            options={optionTrend}
                        />

                        {/* Evolução */}
                        <SelectForm
                            control={form.control}
                            label="Evolução*"
                            name="evolution"
                            description="Descreva a evolução da solicitação"
                            isDisabled={false}
                            options={optionsEvolutions}
                        />

                        {/* Autorizado por: */}
                        <InputForm
                            control={form.control}
                            label="Autorizado por:"
                            name="authorizedBy"
                            description="Informe o nome da pessoa que autorizou a solicitação"
                            isDisabled={false}
                            isAutoComplete="off"
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

                        {/* Categoria */}
                        <SelectForm
                            control={form.control}
                            label="Categorias*"
                            name="category"
                            description="Selecione uma categoria"
                            options={optionsCategory}
                        />

                        {/* Solicitado por */}
                        <InputForm
                            control={form.control}
                            label="Solicitado por:"
                            name="requestBy"
                            description="Informe o nome do solicitante"
                            isDisabled={false}
                            isAutoComplete="off"
                        />

                        {/* Telefone */}
                        <InputPhoneForm
                            control={form.control}
                            label="Telefone"
                            name="numberPhone"
                            description="Informe o número do telefone do solicitante"
                            isDisabled={false}
                        />

                        {/* Descrição do serviço */}
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

                        {/* Observações */}
                        <TextareaForm
                            control={form.control}
                            name="observation"
                            label="Observações"
                            isDisabled={false}
                            description="Campo destinado para inserir observações"
                            placeholder="Informções inseridas aqui, não serão exibidas para o solicitante"
                            isAutoComplete="off"
                            rows={4}
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
