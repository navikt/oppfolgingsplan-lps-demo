import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  fieldItem: {
    display: "flex",
    flexDirection: "column",
    borderBottom: "1px solid #d1d1d1",
    paddingTop: 8,
    paddingBottom: 8,
  },
  fieldLabel: {
    fontWeight: "bold",
    fontSize: 14,
  },
  fieldValue: {
    fontWeight: "light",
    fontSize: 12,
    marginTop: 4,
  },
});

interface Props {
  label: string;
  value: string;
}

export const FieldItem = ({ label, value }: Props) => {
  if (!value) return null;
  return (
    <View style={styles.fieldItem}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <Text style={styles.fieldValue}>{value}</Text>
    </View>
  );
};
