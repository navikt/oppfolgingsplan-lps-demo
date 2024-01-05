import { BodyLong, DatePicker, Heading, useDatepicker } from "@navikt/ds-react";
import React from "react";

export const OppfolgingsplanPeriod = () => {
  const fromDate = useDatepicker({
    onDateChange: console.log,
  });

  const toDate = useDatepicker({
    onDateChange: console.log,
  });

  return (
    <div>
      <Heading size="medium" level={"2"} className="mt-4">
        Periode for oppfølging
      </Heading>
      <BodyLong textColor="subtle">
        Oppgi hvor lenge dere ønsker at denne oppfølgingsplanen skal vare. Dette
        kan for eksempel være frem til dere ønsker å ta en oppfølgingssamtale
        (med eller uten NAV), og vurdere hvordan denne perioden har gått
      </BodyLong>
      <div className="flex flex-row gap-8">
        <DatePicker {...fromDate.datepickerProps}>
          <DatePicker.Input {...fromDate.inputProps} label="Fra dato" />
        </DatePicker>
        <DatePicker {...toDate.datepickerProps}>
          <DatePicker.Input {...toDate.inputProps} label="Til dato" />
        </DatePicker>
      </div>
    </div>
  );
};
