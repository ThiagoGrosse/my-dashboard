"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {Button} from "@/components/ui/button";
import {Form} from "@/components/ui/form";
import InputForm from "@/components/forms/input-form";
import TitlePage from "@/components/titlePage/title-page";
import SelectForm from "@/components/forms/select-form";
import {SwitchForm} from "@/components/forms/switch-form";
import {TextareaForm} from "@/components/forms/textarea-form";
import {Check, Undo2} from "lucide-react";

const FormSchema = z.object({
    exempleInput: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    exempleSelect: z.string().optional(),
    exempleSwitch: z.boolean().optional(),
    exempleTextarea: z.string().optional(),
});

export default function IncluedCalledPage() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            exempleInput: "",
            exempleSelect: "",
            exempleTextarea: "",
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data);
    }

    return (
        <div className="flex flex-col">
            <TitlePage title="Incluir Chamado" />
            <div className="py-10 px-5 mb-8">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <InputForm
                            control={form.control}
                            isDisabled={false}
                            label="Título exemplo para input"
                            name="exempleInput"
                            placeholder="Placeholder do input"
                            description="Descrição do campo input"
                            isAutoComplete="off"
                        />
                        <SelectForm
                            control={form.control}
                            label="Exemplo de select"
                            name="exempleSelect"
                            description="Descrição do select"
                        />

                        <SwitchForm
                            control={form.control}
                            name="exempleSwitch"
                            label="Exemplo de Switcher"
                            description="Descrição do Switcher"
                        />

                        <TextareaForm
                            control={form.control}
                            name="exempleTextarea"
                            label="Exemplo de TextArea"
                            description="Descrição do TextArea"
                            placeholder="Placeholder do TextArea"
                            isDisabled={false}
                            isAutoComplete="off"
                        />
                        <div className="flex px-5 w-full items-center justify-around">
                            <Button type="button" variant="secondary">
                                <Undo2 /> Voltar
                            </Button>
                            <Button type="submit">
                                <Check color="#00ff00" />
                                Enviar
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}
