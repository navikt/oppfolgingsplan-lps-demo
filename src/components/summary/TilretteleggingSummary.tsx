import { VStack } from "@navikt/ds-react";
import { SummaryField } from "@/components/summary/SummaryField";
import { fieldTexts } from "@/text/fieldTexts";
import { useGlobalState } from "@/state/appState";

export const TilretteleggingSummary = () => {
  const { globalFormState } = useGlobalState();
  return (
    <VStack gap="4">
      <SummaryField
        fieldName={
          fieldTexts.oppfolgingsplanTexts.tidligereTilretteleggingBeskrivelse
        }
        fieldValue={
          globalFormState.oppfolgingsplanFormFields
            .tidligereTilretteleggingBeskrivelse
        }
      />
      <SummaryField
        fieldName={
          fieldTexts.oppfolgingsplanTexts.tilretteleggingIDennePerioden
        }
        fieldValue={
          globalFormState.oppfolgingsplanFormFields
            .tilretteleggingIDennePerioden
        }
      />
      <SummaryField
        fieldName={fieldTexts.oppfolgingsplanTexts.muligheterForTilrettelegging}
        fieldValue={
          globalFormState.oppfolgingsplanFormFields.muligheterForTilrettelegging
        }
      />
    </VStack>
  );
};
