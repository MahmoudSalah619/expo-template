import { Text, ThemedView } from "@/components/atoms";
import React from "react";
import { Appearance, Switch, useColorScheme } from "react-native";

export default function page() {
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={{ flex: 1 }}>
      <Text>Screen1</Text>
      <Switch
        value={colorScheme == "dark"}
        onChange={() => {
          Appearance.setColorScheme(colorScheme == "dark" ? "light" : "dark");
        }}
      />
    </ThemedView>
  );
}
