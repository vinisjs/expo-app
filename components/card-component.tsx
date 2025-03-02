import { View, Text } from "react-native";

interface CardComponentProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function CardComponent({
  title,
  description,
  children,
}: CardComponentProps) {
  return (
    <View className="bg-white p-4 rounded-md shadow-md w-full">
      <Text className="text-lg font-bold">{title}</Text>
      <Text className="text-md font-light">{description}</Text>
      <View className="">{children}</View>
    </View>
  );
}
