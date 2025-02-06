"use client";
import {
    BodyLong,
    Button, Checkbox,
    CheckboxGroup,
    DatePicker,
    GuidePanel,
    Heading,
    Label,
    ReadMore, Switch,
    Textarea
} from "@navikt/ds-react";
import React, {useState} from "react";
import {optionalText} from "@/text/textUtils";
import {fieldTexts} from "@/text/fieldTexts";
import {ContentPage, Step} from "@/components/ContentPage";

export default function Page() {
    const [planleggingAvOppfølgingssamtale, setPlanlegginAvOppfølgingssamtale] = useState<boolean>(false);
    return (
        <div className="max-w-4xl pt-12">
            <div className="flex flex-col gap-4">
                <ContentPage
                    pageHeader="Kvittering"
                    activeStep={Step.kvittering}
                >
                    <BodyLong>
                        Takk for lagring av oppfølgingsplan TODO
                    </BodyLong>
                    <div className="flex flex-col">

                        <ReadMore header={"Informasjon om deling med lege"}>Å dele oppfølgingsplanen med legen gir
                            dessverre ikke gi legen mulighet for å kontakte deg tilbake her på nav.no. Legen mottar
                            planen som et vedlegg i sitt pasientsystem. Du vil bli kontaktet på telefon dersom lege har
                            spørsmål rundt innholdet i planen. Som arbeidsgiver har du mulighet til å ta direkte kontakt
                            med fastlegen for å snakke om funksjonsevne og tilrettelegging for din sykmeldte
                            ansatte.</ReadMore>
                        <Textarea
                            label={optionalText(fieldTexts.kommunikasjonTexts.beskjedTilFastlege)}
                        />
                        <Button variant="primary" className="w-fit mt-4 mb-8">
                            Del med lege
                        </Button>

                        <BodyLong>Å dele oppfølgingsplanen med legen gir dessverre ikke gi legen mulighet for å kontakte
                            deg tilbake her på nav.no. Legen mottar planen som et vedlegg i sitt pasientsystem. Du vil
                            bli kontaktet på telefon dersom lege har spørsmål rundt innholdet i planen. Som arbeidsgiver
                            har du mulighet til å ta direkte kontakt med fastlegen for å snakke om funksjonsevne og
                            tilrettelegging for din sykmeldte ansatte.</BodyLong>
                        <Textarea
                            label={
                                fieldTexts.kommunikasjonTexts.trengerDereHjelpFraNAVBeskrivelse
                            }
                        />
                        <Button variant="primary" className="w-fit mt-4 mb-8">
                            Del med Nav
                        </Button>

                        <Button variant="primary" className="w-fit mt-4"
                                onClick={() => setPlanlegginAvOppfølgingssamtale(true)}>
                            Planlegg neste oppfølgingssamtale
                        </Button>
                    </div>

                    {planleggingAvOppfølgingssamtale && <><Textarea
                        label={"Fyll inn tekst for hendelse"} // sjekk med fag
                    />
                        <Label>Velg dato for neste oppfølging</Label>
                        <Switch description="Vi sender e-post når tiden nærmer seg">
                            Varsle med e-post
                        </Switch>
                        <DatePicker.Standalone
                            onSelect={console.info} fromDate={new Date()}/>
                    </>}
                </ContentPage>

            </div>
        </div>
    );
}
