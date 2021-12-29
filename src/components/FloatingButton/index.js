import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

export default function FloatingButton({ toggle, isOpen }) {
  return (
    <Pressable onPress={toggle} style={styles.button}>
      <Text style={styles.text}>{isOpen ? "x" : "+"}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "orange",
    borderRadius: 40,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
