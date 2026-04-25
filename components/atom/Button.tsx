import { TouchableOpacity } from "react-native";
import { Text } from "../Themed";

export default function ButtonComponent({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-38 h-20 flex flex-1 px-6 py-4  bg-white rounded-lg mt-3"
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

export function ButtonForward({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-38 h-20 flex flex-1 px-6 py-4  bg-blue-500 rounded-lg mt-3"
    >
      <Text className="text-white">{title}</Text>
    </TouchableOpacity>
  );
}
