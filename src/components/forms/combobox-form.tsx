import {Check, ChevronsUpDown} from "lucide-react";
import {Control, Path, FieldValues} from "react-hook-form";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";

type options = {
    value: string;
    label: string;
};

type Props<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    description?: string;
    label: string;
    placeholder?: string;
    options: options[];
    isDisabled?: boolean; // Adiciona a propriedade isDisabled para controle de desabilitação
};

export function ComboboxForm<T extends FieldValues>({
    control,
    name,
    description,
    label,
    placeholder,
    options,
    isDisabled = false, // Define um valor padrão como false (não desabilitado)
}: Props<T>) {
    return (
        <FormField
            control={control}
            name={name}
            render={({field}) => (
                <FormItem className="flex flex-col w-full">
                    <FormLabel>{label}</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    className={cn("w-full justify-between", !field.value && "text-muted-foreground")}
                                    disabled={isDisabled}
                                >
                                    {field.value
                                        ? options.find((option) => option.label === field.value)?.label
                                        : placeholder}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0">
                            <Command>
                                <CommandInput placeholder={placeholder} disabled={isDisabled} />{" "}
                                <CommandList>
                                    <CommandEmpty>Nenhuma opção encontrada</CommandEmpty>
                                    <CommandGroup>
                                        {options.map((option) => (
                                            <CommandItem
                                                value={option.label}
                                                key={option.value}
                                                onSelect={() => {
                                                    if (!isDisabled) {
                                                        field.onChange(option.label);
                                                    }
                                                }}
                                                disabled={isDisabled}
                                            >
                                                {option.label}
                                                <Check
                                                    className={cn(
                                                        "ml-auto",
                                                        option.label === field.value ? "opacity-100" : "opacity-0"
                                                    )}
                                                />
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    <FormDescription>{description}</FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
