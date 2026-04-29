import Card from "@/components/molecules/Card";
import ModalComponent from "@/components/molecules/Modal";
import { View } from "@/components/Themed";
import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CATEGORY_DATA, PetCategory } from "../data/category";
import HomeImageCardModalContent from "../screen/homescreen/HomeImageCardModalContent";
import HomeListHeader from "../screen/homescreen/HomeListHeader";
import HomeModalContent from "../screen/homescreen/HomeModalContent";

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

const styles = StyleSheet.create({
  modalHeaderImage: {
    width: "100%",
    height: 220,
  },
  modalBody: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  sectionsList: {
    width: "100%",
    paddingHorizontal: 0,
    marginTop: 16,
  },
  sectionButton: {
    minHeight: 45,
    width: 45,
    marginTop: 0,
    paddingHorizontal: 4,
    borderColor: "#1F7A8C",
    backgroundColor: "#EEF3F5",
  },
  sectionButtonText: {
    marginTop: 0,
    fontSize: 10,
    color: "#1F7A8C",
    fontWeight: "600",
  },
  actionsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginTop: 20,
  },
  actionButton: {
    flex: 1,
    minHeight: 44,
    borderRadius: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButton: {
    backgroundColor: "#1F7A8C",
  },
  secondaryButton: {
    backgroundColor: "#EEF3F5",
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  secondaryButtonText: {
    color: "#1F7A8C",
    fontWeight: "600",
  },
});
