"use client";

import {Control, Path, FieldValues} from "react-hook-form";
import {FormControl, FormDescription, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Switch} from "@/components/ui/switch";

type Props<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    description?: string;
    label: string;
};

export function SwitchForm<T extends FieldValues>({control, name, description, label}: Props<T>) {
    return (
        <div>
            <div className="space-y-4">
                <FormField
                    control={control}
                    name={name}
                    render={({field}) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                                <FormLabel className="text-base">{label}</FormLabel>
                                <FormDescription>{description}</FormDescription>
                            </div>
                            <FormControl>
                                <Switch checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </div>
        </div>
    );
}
