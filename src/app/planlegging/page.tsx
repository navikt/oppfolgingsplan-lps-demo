"use client";
import {ContentPage, Step} from "@/components/ContentPage";
import React from "react";
import {useRouter} from "next/navigation";
import {useGlobalState} from "@/state/appState";
import {DatePicker, Label, Textarea} from "@navikt/ds-react";


export default function Page() {
    const router = useRouter();


    return (
        <ContentPage
            pageHeader="Planlegg neste oppfølging"
            activeStep={Step.planlegging}
        >
            <Textarea
                label={"Fyll inn tekst for hendelse"} // sjekk med fag
            />
            <Label>Velg dato for neste oppfølging</Label>
            <DatePicker.Standalone
                onSelect={console.info} fromDate={new Date()}/>

        </ContentPage>

    );
}
