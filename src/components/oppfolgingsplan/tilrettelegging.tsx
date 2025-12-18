import { Heading } from "@navikt/ds-react";
import { ControlledTextarea } from "@/components/form/ControlledTextarea";
import { Section } from "@/components/wrappers/Section";
import { useGlobalState } from "@/state/appState";
import { fieldTexts } from "@/text/fieldTexts";
import { optionalText } from "@/text/textUtils";

export const Tilrettelegging = () => {
  const { globalFormState } = useGlobalState();

  return (
    <div>
      <Heading size="medium" level={"2"} spacing>
        Tilrettelegging for å være i arbeid
      </Heading>

      <Section>
        <ControlledTextarea
          name="tidligereTilretteleggingBeskrivelse"
          label={
            fieldTexts.oppfolgingsplanTexts.tidligereTilretteleggingBeskrivelse
          }
          description="Beskriv hva dere har forsøkt av tilrettelegging så langt i sykefraværet. Hva har fungert, og hva har ikke fungert?"
          defaultValue={
            globalFormState.oppfolgingsplanFormFields
              .tidligereTilretteleggingBeskrivelse
          }
          rules={{ required: "Feltet er påkrevd" }}
        />
        <ControlledTextarea
          name="tilretteleggingIDennePerioden"
          label={fieldTexts.oppfolgingsplanTexts.tilretteleggingIDennePerioden}
          description="Beskriv hva dere skal gjøre for at arbeidstakeren kan være i noe jobb"
          defaultValue={
            globalFormState.oppfolgingsplanFormFields
              .tilretteleggingIDennePerioden
          }
          rules={{ required: "Feltet er påkrevd" }}
        />
        <ControlledTextarea
          name="muligheterForTilrettelegging"
          label={optionalText(
            fieldTexts.oppfolgingsplanTexts.muligheterForTilrettelegging,
          )}
          description="For eksempel involvering av bedriftshelsetjeneste, eller utføre andre typer arbeidsoppgaver"
          defaultValue={
            globalFormState.oppfolgingsplanFormFields
              .muligheterForTilrettelegging
          }
        />
      </Section>
    </div>
  );
};
