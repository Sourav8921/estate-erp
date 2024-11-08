import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Card({ text, iconName }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons name={iconName} size={22} color="#3C3B38" />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    paddingTop: 24,
    paddingBottom: 10,
    alignItems: "center",
    backgroundColor: "#FFFCF1",
    marginHorizontal: 8,
    flex: 1,
    elevation: 2,
    gap: 8,
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    color: "#575551",
  },
});
