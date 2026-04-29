import { slides } from "@/app/data/onBoarding";
import { Text, View } from "@/components/Themed";
import { useOnboardingContext } from "@/hooks/OnboardingContext";
import { Dimensions, FlatList } from "react-native";
import { CatAnimation, DogAnimation, RabbitAnimation } from "./AnimatedAnimals";

const { width } = Dimensions.get("window");

export default function OnboardingSlices() {
  const { flatListRef, setCurrentIndex } = useOnboardingContext();

  return (
    <>
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        scrollEnabled
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        renderItem={({ item, index }) => (
          <View style={{ width }} className="items-center px-6 pt-2">
            <View
              className="w-full rounded-3xl overflow-hidden items-center justify-center"
              style={{
                height: width * 0.85,
                backgroundColor: item.accent + "22",
              }}
            >
              {index === 0 && <CatAnimation size={width * 0.68} />}
              {index === 1 && <RabbitAnimation size={width * 0.68} />}
              {index === 2 && <DogAnimation size={width * 0.68} />}
            </View>
            <View
              className="w-16 h-1 rounded-full mt-8"
              style={{ backgroundColor: item.accent }}
            />
            <Text
              className="text-2xl font-bold text-center mt-4 px-4"
              style={{ color: "#111827" }}
            >
              {item.title}
            </Text>
            <Text
              className="text-base text-center mt-3 px-4 leading-6"
              style={{ color: "#6B7280" }}
            >
              {item.description}
            </Text>
          </View>
        )}
      />
    </>
  );
}
