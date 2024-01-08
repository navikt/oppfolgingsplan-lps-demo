import React, { ReactNode } from "react";
import { useController } from "react-hook-form";
import { DatePicker, useDatepicker } from "@navikt/ds-react";
import dayjs from "dayjs";

export interface Props {
  name: "periodeFra" | "periodeTil";
  label?: string | ReactNode;
  defaultValue?: Date | null;
}

export const OpDatePicker = ({ name, label, defaultValue }: Props) => {
  const { field, fieldState } = useController({
    name: name,
    defaultValue: defaultValue,
    rules: {
      required: "Feltet er påkrevd",
    },
  });

  const { datepickerProps, inputProps } = useDatepicker({
    fromDate: new Date("1900"),
    toDate: new Date("2100"),
    openOnFocus: false,
    allowTwoDigitYear: false,
    defaultSelected: field.value ? dayjs(field.value.fom).toDate() : undefined,
    onDateChange: (date: Date | undefined) => {
      field.onChange(date);
    },
  });

  return (
    <DatePicker {...datepickerProps}>
      <DatePicker.Input
        {...inputProps}
        id={field.name}
        label={label}
        error={fieldState.error?.message}
      />
    </DatePicker>
  );
};
