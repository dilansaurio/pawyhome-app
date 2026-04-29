import { PetCategory } from "@/app/data/category";
import HomeModalContent from "@/app/screen/homescreen/components/HomeModalContent";
import { Text, View } from "@/components/Themed";
import ModalComponent from "@/components/molecules/Modal";
import { getAdoptions } from "@/hooks/useAdoptions";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MisAdopciones() {
  const [adoptions, setAdoptions] = useState<PetCategory[]>([]);
  const [selectedPet, setSelectedPet] = useState<PetCategory | null>(null);

  useFocusEffect(
    useCallback(() => {
      getAdoptions().then(setAdoptions);
    }, []),
  );

  return (
    <SafeAreaView
      className="flex-1 bg-[#F5F9FC]"
      edges={["top", "left", "right"]}
    >
      {/* Header */}
      <View className="flex-row items-center px-6 py-4 bg-transparent">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <FontAwesome name="angle-left" size={28} color="#111827" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold" style={{ color: "#111827" }}>
          Mis adopciones
        </Text>
      </View>

      <FlatList
        data={adoptions}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16, gap: 12 }}
        ListEmptyComponent={
          <View className="items-center justify-center mt-20 bg-transparent">
            <FontAwesome name="paw" size={40} color="#D1D5DB" />
            <Text className="mt-4 text-base" style={{ color: "#9CA3AF" }}>
              Aún no tienes adopciones en proceso.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View
            className="flex-row items-center bg-white rounded-2xl px-4 py-4"
            style={{
              gap: 10,
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            {/* Nombre */}
            <Text
              className="flex-1 font-bold text-base"
              style={{ color: "#111827" }}
            >
              {item.petName}
            </Text>

            {/* Estado */}
            <View
              className="rounded-full px-3 py-1"
              style={{ backgroundColor: "#FEF3C7" }}
            >
              <Text
                className="text-xs font-semibold"
                style={{ color: "#D97706" }}
              >
                En proceso de validación
              </Text>
            </View>

            {/* Ver más */}
            <TouchableOpacity
              onPress={() => setSelectedPet(item)}
              className="rounded-full px-3 py-1 border"
              style={{ borderColor: "#1F7A8C" }}
            >
              <Text
                className="text-xs font-semibold"
                style={{ color: "#1F7A8C" }}
              >
                Ver más
              </Text>
            </TouchableOpacity>
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
              hideAdoptButton
            />
          )
        }
      />
    </SafeAreaView>
  );
}
