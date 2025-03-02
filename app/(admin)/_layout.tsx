import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Home } from "lucide-react-native";
import { View, Text } from "react-native";

export default function LayoutAdmin() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
      <Drawer
        screenOptions={{
          drawerActiveTintColor: "#6200ee",
          drawerInactiveTintColor: "#333",
          headerStyle: { backgroundColor: "#6200ee" },
          headerTintColor: "#fff",
          drawerStyle: { backgroundColor: "#fff", width: 240 },
          drawerLabelStyle: { fontSize: 16 },
        }}
      >
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: "Início",
            title: "Visão Geral",
            drawerIcon: ({ color, size }) => <Home size={size} color={color} />,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
