import { BodyLong, VStack } from "@navikt/ds-react";

interface Props {
  fieldName: string;
  fieldValue: string | null;
}

export const SummaryField = ({ fieldName, fieldValue }: Props) => {
  if (!fieldValue) return null;

  return (
    <VStack>
      <BodyLong size="large">{fieldName}</BodyLong>
      <BodyLong textColor="subtle">{fieldValue}</BodyLong>
    </VStack>
  );
};
