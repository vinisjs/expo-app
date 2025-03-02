import { Link } from "expo-router";
import { Text, View } from "react-native";
import { Platform } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="mt-4 gap-4 w-full px-4 max-w-2xl mx-auto">
        <Text className="text-5xl font-bold dark:text-zinc-50 gap-2">Menu</Text>

        {Platform.OS !== "web" ? (
          <>
            <Link
              className="p-2 w-full rounded-md font-medium bg-sky-500 text-zinc-100 text-center"
              href="/(app)/home"
            >
              App
            </Link>

            <Link
              className="p-2 w-full rounded-md font-medium bg-sky-500 text-zinc-100 text-center"
              href="/(admin)/home"
            >
              Administração
            </Link>
          </>
        ) : (
          <>
            <Link
              className="p-2 w-full rounded-md font-medium bg-sky-500 text-zinc-100 text-center"
              href="/(app)/home"
            >
              App
            </Link>
            // Só exibe o link da administração no navegador
            <Link
              className="p-2 w-full rounded-md font-medium bg-sky-500 text-zinc-100 text-center"
              href="/(admin)/home"
            >
              Administração
            </Link>
          </>
        )}
      </View>
    </View>
  );
}
