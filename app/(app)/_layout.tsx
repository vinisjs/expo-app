import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{}} />
      <Tabs.Screen name="settings" options={{}} />
      <Tabs.Screen name="profile" options={{}} />
    </Tabs>
  );
}
