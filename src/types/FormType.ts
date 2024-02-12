export type OppfolgingsplanFormFields = {
  evalueringsdato: Date | null;
  typiskArbeidshverdag: string;
  arbeidsoppgaverSomKanUtfores: string;
  arbeidsoppgaverSomIkkeKanUtfores: string;
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
