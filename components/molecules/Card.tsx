import { CARD_COLORS } from "@/constants/ColorsCard";
import { Image, TouchableOpacity } from "react-native";
import { Text, View } from "../Themed";

function getRandomCardColor() {
  return CARD_COLORS[Math.floor(Math.random() * CARD_COLORS.length)];
}

type CardProps = {
  title?: string;
  description?: string;
  button?: boolean;
  backgroundColor?: string;
  source: any;
  onPress: () => void;
};

export default function Card({
  title,
  description,
  button,
  backgroundColor,
  source,
  onPress,
}: CardProps) {
  const bgColor = backgroundColor ?? getRandomCardColor();
  return (
    <View
      className="rounded-xl  shadow-md w-full items-end self-center p-3 border border-slate-200"
      style={{ backgroundColor: bgColor }}
    >
      {title && <Text className="text-xl font-bold mb-2">{title}</Text>}

      <Image source={source} className="w-full h-40 rounded-md" />
      {description && (
        <Text className="text-gray-700 text-sm pt-3">{description}</Text>
      )}
      {button && (
        <TouchableOpacity
          onPress={onPress}
          className="mt-2 border border-slate-300 rounded-lg px-4 py-2 w-[100px]"
        >
          <Text className="text-black text-center ">Ver más</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export function ImageCard({
  title,
  description,
  backgroundColor,
  source,
  onPress,
}: CardProps) {
  const bgColor = backgroundColor ?? getRandomCardColor();
  return (
    <View
      className="rounded-xl shadow-md w-full h-[180px] self-center overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <Image
        source={source}
        className="absolute w-full h-full start-28"
        resizeMode="contain"
      />

      {/* Paw emoji background decoration */}
      <Text className="absolute text-[220px] opacity-10 -bottom-4 right-2 rotate-[-20deg]">
        🐾
      </Text>

      <View className="flex-1 p-6 justify-between ">
        <View>
          {title && (
            <Text className="text-xl font-bold text-black">{title}</Text>
          )}
          {description && (
            <Text className="text-black text-lg w-[200px] pt-2 ">
              {description}
            </Text>
          )}
        </View>

        <View className="flex-row">
          <TouchableOpacity
            onPress={onPress}
            className="bg-white rounded-lg px-4s py-2 w-[100px]"
          >
            <Text className="text-text-main text-center">Ver más</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
