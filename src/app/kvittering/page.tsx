"use client";
import {
    Alert,
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
    const [isSharedWithLege, setIsSharedWithLege] = useState<boolean>(false);
    const [isSharedWithNav, setIsSharedWithNav] = useState<boolean>(false);
    const [isSent, setIsSent] = useState<boolean>(false);

    return (
        <div className="flex flex-col w-full">
            <ContentPage
                pageHeader="Kvittering"
                activeStep={Step.kvittering}
            >
                <BodyLong>
                    Takk! Du har nå lagret planen men den er ikke delt med Nav eller legen. TODO
                </BodyLong>
                <div className="flex flex-col">

                    <ReadMore className="mb-4" header={"Informasjon om deling med lege"}>Å dele oppfølgingsplanen
                        med legen gir
                        dessverre ikke gi legen mulighet for å kontakte deg tilbake her på nav.no. Legen mottar
                        planen som et vedlegg i sitt pasientsystem. Du vil bli kontaktet på telefon dersom lege har
                        spørsmål rundt innholdet i planen. Som arbeidsgiver har du mulighet til å ta direkte kontakt
                        med fastlegen for å snakke om funksjonsevne og tilrettelegging for din sykmeldte
                        ansatte.</ReadMore>
                    <Textarea
                        label={optionalText(fieldTexts.kommunikasjonTexts.beskjedTilFastlege)}
                    />
                    <Button onClick={() => setIsSharedWithLege(true)} variant="primary" className="w-fit mt-4">
                        Del plan og beskjed med lege
                    </Button>
                    {isSharedWithLege && <Alert className="mt-8" variant="success">
                        Takk, du har delt planen med lege.
                    </Alert>}

                    <ReadMore className="mt-8 mb-4" header={"Informasjon om deling med Nav"}>Nav vurderer retten til
                        sykepenger
                        fortløpende (§ Folketrygdlovens kapittel 8), og vi vurderer også den sykmeldtes mulighet til
                        å være i aktivitet. Nav-veileder vil for eksempel be om oppfølgingsplan for å vurdere
                        aktivitetskravet ved 8-ukers sykmelding og i forkant av dialogmøte 2. Nav vil alltid lese
                        meldinger som sendes gjennom oppfølgingsplanen, og vurdere behovet for tiltak og
                        tilbakemelding. Takk for at du deler oppfølgingsplanen med Nav!</ReadMore>
                    <Textarea
                        label={
                            fieldTexts.kommunikasjonTexts.trengerDereHjelpFraNAVBeskrivelse
                        }
                    />
                    <Button onClick={() => setIsSharedWithNav(true)} variant="primary" className="w-fit mt-4 mb-14">
                        Del plan og beskjed med Nav
                    </Button>
                    {isSharedWithNav && <Alert className="mt-8" variant="success">
                        Takk, du har delt planen md Nav.
                    </Alert>}

                    <div className="flex flex-col gap-4">
                        <Heading size="medium">Planlegg neste oppfølgingssamtale</Heading>
                        <BodyLong>Som arbeidsgiver er det ditt ansvar å følge opp en ansatt som er sykmeldt. En god
                            dialog
                            både før og etter sykdom, kan gjøre jobben lettere når dere skal planlegge tiltak og
                            muligheter
                            for tilpasning og tilstedeværelse på jobben. Her kan du planlegge neste
                            oppfølgingssamtale.
                            Den
                            vil legge seg i tidslinjen og vises i kalenderen din her på Min Side
                            Arbeidsgiver.</BodyLong>


                        {true && <><Textarea
                            label={"Fyll inn tekst for hendelse"} // sjekk med fag
                        />
                            <Label>Velg dato for neste oppfølging</Label>
                            <DatePicker.Standalone
                                onSelect={console.info} fromDate={new Date()}/>

                            <Label>Ønsker du å motta en påminnelse på e-post?</Label>
                            <Switch description="Vi sender e-post når tiden nærmer seg">
                                Varsle med e-post
                            </Switch>

                            <Button onClick={() => setIsSent(true)} variant="primary" className="w-fit mt-4 mb-8">
                                Opprett ny oppfølgingssamtale
                            </Button>
                        </>
                        }
                    </div>
                </div>

            </ContentPage>
        </div>
    );
}
