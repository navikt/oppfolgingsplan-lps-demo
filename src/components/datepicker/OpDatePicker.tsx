import React, { ReactNode } from "react";
import { useController } from "react-hook-form";
import { DatePicker, useDatepicker } from "@navikt/ds-react";
import { toDate } from "@/utils/dateUtils";
import {OppfolgingsplanFormFields} from "@/types/FormType";

export interface Props {
  name: "periodeFra" | "periodeTil";
  label?: string | ReactNode;
  defaultValue?: Date | null;
}

export const OpDatePicker = ({ name, label, defaultValue }: Props) => {
  const { field, fieldState } = useController<OppfolgingsplanFormFields>({
    name: name,
    defaultValue: defaultValue,
    rules: {
      required: "Feltet er påkrevd",
    },
  });

  const { datepickerProps, inputProps } = useDatepicker({
    defaultSelected: field.value ? toDate(field.value as Date) : undefined,
    onDateChange: (date: Date | undefined) => {
      field.onChange(date);
    },
  });

  return (
    <DatePicker {...datepickerProps}>
      <DatePicker.Input
        id={field.name}
        {...inputProps}
        label={label}
        placeholder="DD.MM.ÅÅÅÅ"
        error={fieldState.error?.message}
      />
    </DatePicker>
  );
};
