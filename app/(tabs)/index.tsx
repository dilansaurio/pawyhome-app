import Card from "@/components/molecules/Card";
import ModalComponent from "@/components/molecules/Modal";
import { View } from "@/components/Themed";
import { saveAdoption } from "@/hooks/useAdoptions";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CATEGORY_DATA, PetCategory } from "../data/category";
import HomeImageCardModalContent from "../screen/homescreen/components/HomeImageCardModalContent";
import HomeListHeader from "../screen/homescreen/components/HomeListHeader";
import HomeModalContent from "../screen/homescreen/components/HomeModalContent";

export default function TabOneScreen() {
  const [selectedPet, setSelectedPet] = useState<PetCategory | null>(null);
  const [isImageCardModalVisible, setIsImageCardModalVisible] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["left", "right"]}>
      <FlatList
        data={CATEGORY_DATA}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={
          <HomeListHeader onPress={() => setIsImageCardModalVisible(true)} />
        }
        contentContainerStyle={{ flexGrow: 1 }}
        columnWrapperStyle={{ gap: 10, paddingHorizontal: 10 }}
        renderItem={({ item }) => (
          <View style={{ flex: 1, marginTop: 10, paddingHorizontal: 3 }}>
            <Card
              title={item.title}
              source={item.source}
              description={item.description}
              button
              backgroundColor="white"
              onPress={() => setSelectedPet(item)}
            />
          </View>
        )}
      />
      <ModalComponent
        visible={selectedPet !== null}
        onClose={() => setSelectedPet(null)}
        modalContent={
          selectedPet && (
            <HomeModalContent
              onPress={() => setSelectedPet(null)}
              petName={selectedPet.petName}
              petAge={selectedPet.petAge}
              source={selectedPet.source}
              details={selectedPet.details}
              onAdopt={async () => {
                await saveAdoption(selectedPet);
                setSelectedPet(null);
                router.push("/screen/profilescreen/MisAdopciones");
              }}
            />
          )
        }
      />
      <ModalComponent
        visible={isImageCardModalVisible}
        onClose={() => setIsImageCardModalVisible(false)}
        modalContent={
          <HomeImageCardModalContent
            onClose={() => setIsImageCardModalVisible(false)}
          />
        }
      />
    </SafeAreaView>
  );
}
