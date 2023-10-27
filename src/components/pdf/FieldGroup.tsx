"use client";
import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React, { ReactNode } from "react";

const styles = StyleSheet.create({
  fieldGroup: {
    marginTop: 24,
  },
  groupHeading: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 16,
  },
});

interface Props {
  heading: string;
  children: ReactNode;
}

export const FieldGroup = ({ heading, children }: Props) => {
  return (
    <View style={styles.fieldGroup}>
      <Text style={styles.groupHeading}>{heading}</Text>
      {children}
    </View>
  );
};
