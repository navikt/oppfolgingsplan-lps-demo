import {OppfolgingsplanFormFields} from "@/types/FormType";

export const defaultFormValues: OppfolgingsplanFormFields = {
    jobbOgMuligheterFormFields: {
        typiskArbeidshverdag: "",
        arbeidsoppgaverSomKanUtfores: "",
        arbeidsoppgaverSomIkkeKanUtfores: "",
        tidligereTilrettelegging: null,
        tidligereTilretteleggingBeskrivelse: "",
        tilretteleggingIDennePerioden: "",
        muligheterForTilrettelegging: "",
    },
    kommunikasjonFormFields: {
        mottaker: [],
        beskjedTilFastlege: "",
        trengerHjelpFraNav: null,
        trengerHjelpFraNavBeskrivelse: "",
        utfyllendeOpplysninger: "",
        kontaktpersonNavn: "Ståle Svelesen",
        kontaktpersonTelefonnummer: "99999999",
    },
    medvirkningFormFields: {
        sykmeldtHarMedvirket: null
    }
};
