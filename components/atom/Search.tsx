import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TextInput } from "react-native";
import { View } from "../Themed";

export default function Search({ placeholder }: { placeholder: string }) {
  return (
    <View className="w-full items-center h-[45px] px-4 bg-slate-100 border border-slate-200 rounded-xl">
      <FontAwesome
        name="search"
        size={20}
        color="#94a3b8"
        className="absolute left-2 top-3"
      />
      <TextInput
        placeholder={placeholder}
        className="w-full h-full pl-6 text-[#94a3b8]"
      />
    </View>
  );
}
