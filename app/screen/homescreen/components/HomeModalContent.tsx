import Form from "@/components/molecules/Form";
import { Text, View } from "@/components/Themed";
import { Image, TouchableOpacity } from "react-native";

type HomeModalContentProps = {
  onPress: () => void;
  petName: string;
  petAge: string;
  source: any;
  details: { id: string; title: string; description: string }[];
  onAdopt?: () => void;
  hideAdoptButton?: boolean;
};

export default function HomeModalContent({
  onPress,
  petName,
  petAge,
  source,
  details,
  onAdopt,
  hideAdoptButton = false,
}: HomeModalContentProps) {
  return (
    <View>
      {/* Foto */}
      <Image source={source} className="w-full h-[220px]" resizeMode="cover" />
      <View className="px-[16px] pb-[16px]">
        {/* Titulo */}
        <View className="flex flex-row gap-3 items-center mt-3 mb-1">
          <Text className="text-lg font-bold">{petName}</Text>
          <Text className="text-gray-500">{petAge}</Text>
        </View>

        <Form data={details} numColumns={2} />

        {/* Botones */}
        <View className="w-full flex-row items-center justify-center gap-12 mt-6">
          <TouchableOpacity
            className="flex-1 min-h-[44px] rounded-[24px] px-[16px] items-center justify-center border border-[#EEF3F5]"
            onPress={onPress}
          >
            <Text className="font-medium text-[#1F7A8C]">Atrás</Text>
          </TouchableOpacity>
          {!hideAdoptButton && (
            <TouchableOpacity
              className="flex-1 min-h-[44px] rounded-[24px] px-[16px] items-center justify-center bg-brand-primary"
              onPress={onAdopt}
            >
              <Text style={{ color: "white" }} className="font-medium">
                Adoptar!
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
