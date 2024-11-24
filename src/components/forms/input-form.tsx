"use client";

import {Control, Path, FieldValues} from "react-hook-form";
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "../ui/form";
import {Input} from "../ui/input";

type Props<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    description?: string;
    label: string;
    placeholder?: string;
    isDisabled: boolean;
    isAutoComplete: string;
};

export default function InputForm<T extends FieldValues>({
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
                        <Input
                            className="w-full"
                            placeholder={placeholder}
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
