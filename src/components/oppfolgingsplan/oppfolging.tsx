import { Heading } from "@navikt/ds-react";
import { Evalueringsdato } from "@/components/datepicker/Evalueringsdato";
import { ControlledTextarea } from "@/components/form/ControlledTextarea";
import { Section } from "@/components/wrappers/Section";
import { useGlobalState } from "@/state/appState";
import { fieldTexts } from "@/text/fieldTexts";

export const Oppfolging = () => {
  const { globalFormState } = useGlobalState();

  return (
    <div>
      <Heading size="medium" level={"2"} spacing>
        Oppfølging
      </Heading>
      <Section>
        <ControlledTextarea
          name="oppfolging"
          label={fieldTexts.oppfolgingsplanTexts.oppfolging}
          defaultValue={globalFormState.oppfolgingsplanFormFields.oppfolging}
          rules={{ required: "Feltet er påkrevd" }}
        />
        <Evalueringsdato
          id="evaluationDate"
          label={fieldTexts.oppfolgingsplanTexts.evalueringsdato}
          defaultValue={
            globalFormState.oppfolgingsplanFormFields.evalueringsdato
          }
        />
      </Section>
    </div>
  );
};
