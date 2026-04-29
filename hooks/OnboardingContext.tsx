import { slides } from "@/app/data/onBoarding";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { createContext, useContext, useRef, useState } from "react";
import { FlatList } from "react-native";

type OnboardingContextType = {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  flatListRef: React.RefObject<FlatList>;
  handleNext: () => void;
  handleComplete: () => void;
  currentSlide: (typeof slides)[number];
};

const OnboardingContext = createContext<OnboardingContextType | null>(null);

export function OnboardingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleComplete = async () => {
    await AsyncStorage.setItem("onboardingCompleted", "true");
    router.replace("/login");
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      const next = currentIndex + 1;
      flatListRef.current?.scrollToIndex({ index: next, animated: true });
      setCurrentIndex(next);
    } else {
      handleComplete();
    }
  };

  const currentSlide = slides[currentIndex];

  return (
    <OnboardingContext.Provider
      value={{
        currentIndex,
        setCurrentIndex,
        flatListRef,
        handleNext,
        handleComplete,
        currentSlide,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboardingContext() {
  const ctx = useContext(OnboardingContext);
  if (!ctx)
    throw new Error(
      "useOnboardingContext must be used within OnboardingProvider",
    );
  return ctx;
}
