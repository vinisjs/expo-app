import { ScrollView, View } from "react-native";
import "@/global.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Input } from "@/components/ui/input";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHeaderHeight } from "@react-navigation/elements";
import { useState } from "react";

export default function AppHomeScreen() {
  const headerHeight = useHeaderHeight();

  const [value, setValue] = useState("");
  const onChangeText = (text: string) => {
    setValue(text);
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        className="flex-1 p-4"
        contentContainerStyle={{ paddingTop: headerHeight - 20 }}
      >
        <View>
          <Card>
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
              <CardDescription>Overview of your app</CardDescription>
            </CardHeader>
            <CardContent>
              <Text>Content goes here</Text>
              <Input
                placeholder="Write some stuff..."
                value={value}
                onChangeText={onChangeText}
                aria-labelledby="inputLabel"
                aria-errormessage="inputError"
              />
            </CardContent>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
