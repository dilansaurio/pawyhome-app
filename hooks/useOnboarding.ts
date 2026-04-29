import { slides } from "@/app/data/onBoarding";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { FlatList } from "react-native";

export default function useOnboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    } else {
      handleComplete();
    }
  };

  const handleComplete = async () => {
    await AsyncStorage.setItem("onboardingCompleted", "true");
    router.replace("/login");
  };

  const currentSlide = slides[currentIndex];

  return {
    currentIndex,
    flatListRef,
    handleNext,
    handleComplete,
    currentSlide,
    setCurrentIndex,
  };
}
