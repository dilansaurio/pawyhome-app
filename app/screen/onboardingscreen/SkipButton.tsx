import { slides } from "@/app/data/onBoarding";
import { useOnboardingContext } from "@/hooks/OnboardingContext";
import { TouchableOpacity } from "react-native";
import { Text, View } from "../../../components/Themed";

export default function SkipButton() {
  const { currentIndex, handleComplete } = useOnboardingContext();

  return (
    <View className="flex-row justify-end px-6 pt-2 h-10">
      {currentIndex < slides.length - 1 && (
        <TouchableOpacity onPress={handleComplete}>
          <Text className="text-base font-medium" style={{ color: "#6B7280" }}>
            Omitir
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
