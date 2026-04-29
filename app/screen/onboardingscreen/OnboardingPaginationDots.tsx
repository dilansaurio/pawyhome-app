import { slides } from "@/app/data/onBoarding";
import { Text, View } from "@/components/Themed";
import { useOnboardingContext } from "@/hooks/OnboardingContext";
import { TouchableOpacity } from "react-native";

export default function OnboardingPaginationDots() {
  const { currentIndex, currentSlide, handleNext } = useOnboardingContext();

  return (
    <>
      <View
        className="flex-row justify-center items-center mt-6"
        style={{ gap: 8 }}
      >
        {slides.map((slide, index) => (
          <View
            key={index}
            style={{
              width: currentIndex === index ? 28 : 8,
              height: 8,
              borderRadius: 4,
              backgroundColor:
                currentIndex === index ? currentSlide.accent : "#CCCCCC",
            }}
          />
        ))}
      </View>

      {/* Next / Comenzar button */}
      <View className="px-6 mt-8 mb-6">
        <TouchableOpacity
          onPress={handleNext}
          className="w-full py-4 rounded-xl items-center"
          style={{ backgroundColor: currentSlide.accent }}
        >
          <Text
            className="text-base font-semibold"
            style={{ color: "#111827" }}
          >
            {currentIndex === slides.length - 1 ? "Comenzar" : "Siguiente"}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
