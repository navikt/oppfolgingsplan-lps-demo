import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  planheaderGroup: {
    marginBottom: 12,
  },
  planHeading: {
    fontWeight: "bold",
    fontSize: 24,
  },
  arbeidstakerDetailGroup: {
    padding: 8,
  },
  arbeidstakerDetail: {
    fontWeight: "light",
    fontSize: 12,
  },
});

export const PlanHeaderGroup = () => {
  return (
    <View style={styles.planheaderGroup}>
      <View style={styles.arbeidstakerDetailGroup}>
        <Text style={styles.planHeading}>Oppfølgingsplan for Kari Normann</Text>
        <Text style={styles.arbeidstakerDetail}>Hakkebakkeskogen 21</Text>
        <Text style={styles.arbeidstakerDetail}>kari@hakkebakkeskogen.no</Text>
        <Text style={styles.arbeidstakerDetail}>95959595</Text>
      </View>
    </View>
  );
};
