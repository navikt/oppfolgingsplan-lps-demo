import {BodyLong, Heading, Textarea} from "@navikt/ds-react";
import React from "react";
import {OppfolgingsplanFormFields} from "@/types/FormType";
import {useGlobalState} from "@/state/appState";
import {Section} from "@/components/wrappers/Section";
import {useFormContext} from "react-hook-form";
import {OpDatePicker} from "@/components/datepicker/OpDatePicker";
import {fieldTexts} from "@/text/fieldTexts";

export const Oppfolging = () => {
  const { globalFormState } = useGlobalState();
  const {
    register,
    formState: { errors },
  } = useFormContext<OppfolgingsplanFormFields>();

  return (
    <div>
      <Heading size="medium" level={"2"} spacing>
        Oppfølging
      </Heading>
      <Section>
        <div>
          <BodyLong weight="semibold">Oppfølgingsperiode</BodyLong>
          <BodyLong textColor="subtle">
            Hvor lenge skal tilretteleggingen vare, og når skal den evalueres?
          </BodyLong>
          <div className="flex flex-row gap-8">
            <OpDatePicker
              name="periodeFra"
              label={fieldTexts.oppfolgingsplanTexts.periodeFra}
              defaultValue={
                globalFormState.oppfolgingsplanFormFields.periodeFra
              }
            />
            <OpDatePicker
              name="periodeTil"
              label={fieldTexts.oppfolgingsplanTexts.periodeTil}
              defaultValue={
                globalFormState.oppfolgingsplanFormFields.periodeTil
              }
            />
          </div>
        </div>

        <Textarea
          label={fieldTexts.oppfolgingsplanTexts.oppfolging}
          description="Beskriv hvordan dere skal vurdere om det er behov for å gjøre endringer i planen"
          {...register("oppfolging", {
            required: "Feltet er påkrevd",
          })}
          defaultValue={globalFormState.oppfolgingsplanFormFields.oppfolging}
          error={errors.oppfolging?.message}
        />
      </Section>
    </div>
  );
};
