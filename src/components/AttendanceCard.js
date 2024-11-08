import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function AttendanceCard({ number, employee, currentStatus }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{number}</Text>
      <Text style={styles.employeeText}>{employee}</Text>
      <Text
        style={
          currentStatus === "Absent"
            ? { color: "#D44848" }
            : { color: "#009262" }
        }
      >
        {currentStatus}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderBottomColor: "rgba(0, 0, 0, 0.2)",
    borderBottomWidth: 0.5,
    justifyContent: "space-between",
    paddingVertical: 20,
    gap: 18,
  },
  numberText: {
    fontSize: 16,
    fontWeight: "500",
  },
  employeeText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
  },
});
