import type { InnsendingFormFields } from "@/types/FormType";

export const defaultFormValues: InnsendingFormFields = {
  oppfolgingsplanFormFields: {
    evalueringsdato: null,
    typiskArbeidshverdag: "",
    arbeidsoppgaverSomKanUtfores: "",
    arbeidsoppgaverSomIkkeKanUtfores: "",
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
    kontaktpersonEpost: "test@nav.no",
    sykmeldtHarMedvirket: null,
    sykmeldtHarIkkeMedvirketBegrunnelse: "",
  },
};
