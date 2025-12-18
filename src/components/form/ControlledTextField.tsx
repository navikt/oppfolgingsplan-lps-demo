import {
  RegisterOptions,
  useController,
  useFormContext,
} from "react-hook-form";
import { TextField, TextFieldProps } from "@navikt/ds-react";

interface ControlledTextFieldProps extends Omit<
  TextFieldProps,
  "name" | "value" | "onChange" | "onBlur"
> {
  name: string;
  defaultValue?: string;
  rules?: RegisterOptions;
}

export const ControlledTextField = ({
  name,
  defaultValue = "",
  rules,
  ...props
}: ControlledTextFieldProps) => {
  const { control } = useFormContext();

  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
  });

  return (
    <TextField
      {...props}
      {...field}
      value={field.value ?? ""}
      error={fieldState.error?.message}
    />
  );
};
