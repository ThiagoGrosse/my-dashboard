"use client";

import {Control, Path, FieldValues} from "react-hook-form";
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot} from "@/components/ui/input-otp";

type Props<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    description?: string;
    label: string;
    placeholder?: string;
    isDisabled: boolean;
};

export function InputPhoneForm<T extends FieldValues>({control, name, description, label, isDisabled}: Props<T>) {
    return (
        <FormField
            control={control}
            name={name}
            render={({field}) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <InputOTP maxLength={11} {...field} disabled={isDisabled}>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                                <InputOTPSlot index={6} />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                                <InputOTPSlot index={7} />
                                <InputOTPSlot index={8} />
                                <InputOTPSlot index={9} />
                                <InputOTPSlot index={10} />
                            </InputOTPGroup>
                        </InputOTP>
                    </FormControl>
                    <FormDescription>{description}</FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
