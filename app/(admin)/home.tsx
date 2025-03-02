import { View, Text } from "react-native";
import "@/global.css";
import CardComponent from "@/components/card-component";
import { Card } from "@/components/ui/card";

export default function Index() {
  return (
    <View>
      <View>
        <Text className="text-md font-light text-sky-500">Admin Page</Text>
        <CardComponent
          title="Administração"
          description="Página de administração"
        />
        <Card>
          <Text className="text-zinc-50">Teste</Text>
        </Card>
      </View>
    </View>
  );
}
