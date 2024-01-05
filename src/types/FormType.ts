export type OppfolgingsplanFormFields = {
    typiskArbeidshverdag: string;
    arbeidsoppgaverSomKanUtfores: string;
    arbeidsoppgaverSomIkkeKanUtfores: string;
    tidligereTilrettelegging: boolean | null;
    tidligereTilretteleggingBeskrivelse: string;
    tilretteleggingIDennePerioden: string;
    muligheterForTilrettelegging: string;
    oppfolging: string;
};

export type InfoTilNavOgLegeFormFields = {
    mottaker: string[];
    beskjedTilFastlege: string;
    trengerHjelpFraNav: boolean | null;
    trengerHjelpFraNavBeskrivelse: string;
    utfyllendeOpplysninger: string;
    kontaktpersonNavn: string;
    kontaktpersonTelefonnummer: string;
    sykmeldtHarMedvirket: boolean | null;
    sykmeldtHarIkkeMedvirketBegrunnelse: string;
};

export type InnsendingFormFields = {
    oppfolgingsplanFormFields: OppfolgingsplanFormFields;
    infoTilNavOgLegeFormFields: InfoTilNavOgLegeFormFields;
};
