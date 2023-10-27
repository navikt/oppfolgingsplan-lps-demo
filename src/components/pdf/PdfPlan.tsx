"use client";
import React from "react";
import { Document, Font, Page, StyleSheet, View } from "@react-pdf/renderer";
import { OppfolgingsplanFormFields } from "@/types/FormType";
import { ArbeidsoppgaverGroup } from "@/components/pdf/ArbeidsoppgaverGroup";
import { TilretteleggingGroup } from "@/components/pdf/TilretteleggingGroup";
import { VirksomhetGroup } from "@/components/pdf/VirksomhetGroup";
import { KommunikasjonGroup } from "@/components/pdf/KommunikasjonGroup";
import { PlanHeaderGroup } from "@/components/pdf/PlanHeaderGroup";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 30,
    width: "100%",
  },
  table: {
    width: "100%",
    fontFamily: "Open Sans",
  },
  planHeading: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
  },
});

Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
      fontWeight: 600,
    },
  ],
});

interface Props {
  globalFormState: OppfolgingsplanFormFields;
}

export const PdfPlan = ({ globalFormState }: Props) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.table}>
          <PlanHeaderGroup />
          <ArbeidsoppgaverGroup globalFormState={globalFormState} />
          <TilretteleggingGroup globalFormState={globalFormState} />
          <VirksomhetGroup globalFormState={globalFormState} />
          <KommunikasjonGroup globalFormState={globalFormState} />
        </View>
      </Page>
    </Document>
  );
};
