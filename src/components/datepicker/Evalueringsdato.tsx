import React, { ReactNode } from "react";
import { useController } from "react-hook-form";
import { DatePicker, useDatepicker } from "@navikt/ds-react";
import { toDate } from "@/utils/dateUtils";

export interface Props {
  id: string;
  label?: string | ReactNode;
  defaultValue?: Date | null;
}

export const Evalueringsdato = ({ id, label, defaultValue }: Props) => {
  const { field, fieldState } = useController({
    name: "evalueringsdato",
    defaultValue: defaultValue,
    rules: {
      required: "Feltet er påkrevd",
    },
  });

  const { datepickerProps, inputProps } = useDatepicker({
    fromDate: new Date("1900"),
    toDate: new Date("2100"),
    allowTwoDigitYear: false,
    defaultSelected: field.value ? toDate(field.value) : undefined,
    onDateChange: (date: Date | undefined) => {
      if (date === undefined) {
        field.onChange(null);
      }
      field.onChange(date);
    },
  });

  return (
    <DatePicker id={id} {...datepickerProps}>
      <DatePicker.Input
        {...inputProps}
        id={field.name}
        description="Oppgi når dere skal gå gjennom planen og vurdere hvordan tilretteleggingen har gått"
        label={label}
        placeholder="DD.MM.ÅÅÅÅ"
        error={fieldState.error?.message}
      />
    </DatePicker>
  );
};
