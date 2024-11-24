"use client";

import {Control, Path, FieldValues} from "react-hook-form";
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Textarea} from "@/components/ui/textarea";

type Props<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    description?: string;
    label: string;
    placeholder?: string;
    isDisabled: boolean;
    isAutoComplete: string;
};

export function TextareaForm<T extends FieldValues>({
    control,
    name,
    description,
    label,
    placeholder,
    isDisabled,
    isAutoComplete,
}: Props<T>) {
    return (
        <FormField
            control={control}
            name={name}
            render={({field}) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Textarea
                            placeholder={placeholder}
                            className="resize-y"
                            disabled={isDisabled}
                            autoComplete={isAutoComplete}
                            {...field}
                        />
                    </FormControl>
                    <FormDescription>{description}</FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
