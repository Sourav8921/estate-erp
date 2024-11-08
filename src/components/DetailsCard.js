import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function DetailsCard({ unit, itemName }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{unit}</Text>
      <Text style={styles.subTitle}>{itemName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFCF1",
    borderColor: "#F5EDD3",
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 20,
    gap: 4,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#3C3B38",
  },
  subTitle: {
    color: "#6E6C69",
    fontSize: 12,
    fontWeight: "400",
  },
});
