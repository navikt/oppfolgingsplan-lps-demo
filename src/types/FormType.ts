export type JobbOgMuligheterFormFields = {
    typiskArbeidshverdag: string;
    arbeidsoppgaverSomKanUtfores: string;
    arbeidsoppgaverSomIkkeKanUtfores: string;
    tidligereTilrettelegging: boolean | null;
    tidligereTilretteleggingBeskrivelse: string;
    tilretteleggingIDennePerioden: string;
    muligheterForTilrettelegging: string;
};

export type KommunikasjonFormFields = {
    mottaker: string[];
    bistandFraNav: string;
    beskjedTilFastlege: string;
    trengerHjelpFraNav: boolean | null;
    trengerHjelpFraNavBeskrivelse: string | null;
    utfyllendeOpplysninger: string;
    kontaktpersonNavn: string;
    kontaktpersonTelefonnummer: string;
};


export type MedvirkningFormFields = {
    sykmeldtHarMedvirket: boolean | null;
}

export type OppfolgingsplanFormFields = {
    jobbOgMuligheterFormFields: JobbOgMuligheterFormFields;
    kommunikasjonFormFields: KommunikasjonFormFields;
    medvirkningFormFields: MedvirkningFormFields;
};
