import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Card({ text, iconName }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.archOverlay} />
      <View style={styles.content}>
        <Ionicons name={iconName} size={22} color="#3C3B38" />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    paddingTop: 24,
    paddingBottom: 10,
    backgroundColor: "#FFFCF1",
    marginHorizontal: 8,
    flex: 1,
    borderColor: "#F5EDD3",
    borderWidth: 1,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  archOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: "#FCF4D8",
    borderBottomLeftRadius: 400,
    borderBottomRightRadius: 400,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    color: "#575551",
  },
});
