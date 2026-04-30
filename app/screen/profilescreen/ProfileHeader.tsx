import { Text, View } from "@/components/Themed";
import { Image } from "react-native";

type HeaderProfileProps = {
  name: string;
  location: string;
};

export default function ProfileHeader({ name, location }: HeaderProfileProps) {
  return (
    <View className="flex items-center justify-center pt-10 top-6">
      {/* icon profile */}
      <View className="w-28 h-28 rounded-full items-center justify-center">
        <Image
          source={require("../../../assets/images/profile/avatar_profile.png")}
          className="w-full h-full rounded-full"
        />
      </View>
      {/* name */}
      <Text className="pt-3 font-bold text-3xl">{name}</Text>
      {/* location */}
      <Text className="text-xl pt-3 text-gray-600">{location}</Text>
    </View>
  );
}
