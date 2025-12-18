import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import { Radio, RadioGroup, RadioGroupProps } from "@navikt/ds-react";

interface ControlledBooleanRadioGroupProps extends Omit<
  RadioGroupProps,
  "name" | "value" | "onChange" | "children"
> {
  name: string;
  defaultValue?: boolean | null;
  rules?: RegisterOptions;
  yesLabel?: string;
  noLabel?: string;
}

export const ControlledBooleanRadioGroup = ({
  name,
  defaultValue = null,
  rules,
  yesLabel = "Ja",
  noLabel = "Nei",
  ...props
}: ControlledBooleanRadioGroupProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
        <RadioGroup
          {...props}
          onBlur={onBlur}
          onChange={onChange}
          error={fieldState.error?.message}
          ref={ref}
          value={value}
        >
          <Radio value={true}>{yesLabel}</Radio>
          <Radio value={false}>{noLabel}</Radio>
        </RadioGroup>
      )}
    />
  );
};
