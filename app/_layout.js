import { Stack } from "expo-router";
import React from "react";
import * as SplashScreen from "expo-splash-screen";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: "left",
        animation: "slide_from_right",
      }}
    />
  );
}
