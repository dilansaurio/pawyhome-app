import { OnboardingProvider } from "@/hooks/OnboardingContext";
import { SafeAreaView } from "react-native-safe-area-context";
import OnboardingPaginationDots from "./screen/onboardingscreen/OnboardingPaginationDots";
import OnboardingSlices from "./screen/onboardingscreen/OnboardingSlices";
import SkipButton from "./screen/onboardingscreen/SkipButton";

export default function OnboardingScreen() {
  return (
    <OnboardingProvider>
      <SafeAreaView className="flex-1 bg-white">
        <SkipButton />
        <OnboardingSlices />
        <OnboardingPaginationDots />
      </SafeAreaView>
    </OnboardingProvider>
  );
}
