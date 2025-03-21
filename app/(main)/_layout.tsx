import MainScreenOptions from "@/components/navigation/MainScreenOptions";
import { CustomScreenOptions } from "@/components/navigation/types";
import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack screenOptions={MainScreenOptions}>
      <Stack.Screen
        name="screen1/index"
        initialParams={{ title: "Screen 1 Header" }}
      />
      <Stack.Screen
        name="screen2/index"
        initialParams={{
          title: "Screen 2",
        }}
      />
      <Stack.Screen name="(tabs)" initialParams={{ hasLogo: true }} />
      <Stack.Screen name="(modals)" initialParams={{ headerShown: false }} />
    </Stack>
  );
}
