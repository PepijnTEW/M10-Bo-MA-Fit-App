import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <>
      <StatusBar style="light" />
      <Tabs screenOptions={{ headerShown: false }}></Tabs>
    </>
  );
}
