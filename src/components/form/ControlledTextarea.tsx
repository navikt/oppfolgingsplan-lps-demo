import { Textarea, type TextareaProps } from "@navikt/ds-react";
import {
  type RegisterOptions,
  useController,
  useFormContext,
} from "react-hook-form";

interface ControlledTextareaProps
  extends Omit<TextareaProps, "name" | "value" | "onChange" | "onBlur"> {
  name: string;
  defaultValue?: string;
  rules?: RegisterOptions;
}

export const ControlledTextarea = ({
  name,
  defaultValue = "",
  rules,
  ...props
}: ControlledTextareaProps) => {
  const { control } = useFormContext();

  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
  });

  return (
    <Textarea
      {...props}
      {...field}
      value={field.value ?? ""}
      error={fieldState.error?.message}
    />
  );
};
