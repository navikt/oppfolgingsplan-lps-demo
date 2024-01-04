import {DatePicker, useDatepicker} from "@navikt/ds-react";
import React from "react";

export const OppfolgingsplanPeriod = () => {
    const fromDate = useDatepicker({
        onDateChange: console.log,
    });

    const toDate = useDatepicker({
        onDateChange: console.log,
    });

    return (

        <div className="flex flex-row gap-8">
            <DatePicker {...fromDate.datepickerProps}>
                <DatePicker.Input {...fromDate.inputProps} label="Fra dato"/>
            </DatePicker>
            <DatePicker {...toDate.datepickerProps}>
                <DatePicker.Input {...toDate.inputProps} label="Til dato"/>
            </DatePicker>
        </div>
    );
};
