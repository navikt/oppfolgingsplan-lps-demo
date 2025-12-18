import { VStack } from "@navikt/ds-react";
import { SummaryField } from "@/components/summary/SummaryField";
import { useGlobalState } from "@/state/appState";
import { fieldTexts } from "@/text/fieldTexts";
import { getLongDateFormat } from "@/utils/dateUtils";

export const OppfolgingSummary = () => {
  const { globalFormState } = useGlobalState();

  return (
    <VStack gap="4">
      <SummaryField
        fieldName={fieldTexts.oppfolgingsplanTexts.oppfolging}
        fieldValue={globalFormState.oppfolgingsplanFormFields.oppfolging}
      />

      <SummaryField
        fieldName={fieldTexts.oppfolgingsplanTexts.evalueringsdato}
        fieldValue={getLongDateFormat(
          globalFormState.oppfolgingsplanFormFields.evalueringsdato,
        )}
      />
    </VStack>
  );
};
