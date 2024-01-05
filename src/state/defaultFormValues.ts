import {InnsendingFormFields} from "@/types/FormType";

export const defaultFormValues: InnsendingFormFields = {
    oppfolgingsplanFormFields: {
        typiskArbeidshverdag: "",
        arbeidsoppgaverSomKanUtfores: "",
        arbeidsoppgaverSomIkkeKanUtfores: "",
        tidligereTilrettelegging: null,
        tidligereTilretteleggingBeskrivelse: "",
        tilretteleggingIDennePerioden: "",
        muligheterForTilrettelegging: "",
        oppfolging: "",
    },
    infoTilNavOgLegeFormFields: {
        mottaker: [],
        beskjedTilFastlege: "",
        trengerHjelpFraNav: null,
        trengerHjelpFraNavBeskrivelse: "",
        utfyllendeOpplysninger: "",
        kontaktpersonNavn: "Ståle Svelesen",
        kontaktpersonTelefonnummer: "99999999",
        sykmeldtHarMedvirket: null,
        sykmeldtHarIkkeMedvirketBegrunnelse: ""
    },
};
