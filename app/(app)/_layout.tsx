import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerTransparent: true,
        }}
      />
      <Tabs.Screen name="settings" options={{}} />
      <Tabs.Screen name="profile" options={{}} />
    </Tabs>
  );
}
