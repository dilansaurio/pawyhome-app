import { CATEGORY_DATA, PetCategory } from "@/app/data/category";
import HomeModalContent from "@/app/screen/homescreen/HomeModalContent";
import ModalComponent from "@/components/molecules/Modal";
import { useMemo, useState } from "react";
import { Alert, Linking, Platform, StyleSheet, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

const DESTINATION = {
  latitude: 4.710989,
  longitude: -74.07209,
};

const PET_MARKERS = [
  { ...CATEGORY_DATA[0], latitude: 4.7155, longitude: -74.0682 },
  { ...CATEGORY_DATA[1], latitude: 4.7062, longitude: -74.0775 },
  { ...CATEGORY_DATA[2], latitude: 4.7189, longitude: -74.076 },
  { ...CATEGORY_DATA[3], latitude: 4.7048, longitude: -74.0653 },
];

const PET_EMOJI: Record<string, string> = {
  "1": "🐶",
  "2": "🐱",
  "3": "🐰",
  "4": "🐹",
};

export default function Find() {
  const [selectedPet, setSelectedPet] = useState<PetCategory | null>(null);

  const initialRegion = useMemo(
    () => ({
      ...DESTINATION,
      latitudeDelta: 0.03,
      longitudeDelta: 0.03,
    }),
    [],
  );

  const openNavigation = async () => {
    const destination = `${DESTINATION.latitude},${DESTINATION.longitude}`;
    const navigationUrl =
      Platform.OS === "ios"
        ? `http://maps.apple.com/?daddr=${destination}`
        : Platform.OS === "android"
          ? `google.navigation:q=${destination}`
          : `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

    try {
      const supported = await Linking.canOpenURL(navigationUrl);

      if (supported) {
        await Linking.openURL(navigationUrl);
        return;
      }

      await Linking.openURL(
        `https://www.google.com/maps/search/?api=1&query=${destination}`,
      );
    } catch {
      Alert.alert("No fue posible abrir la navegación");
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={["left", "right", "bottom"]}>
      <View style={styles.header}>
        <Text style={styles.title}>Encuentra una mascota cerca</Text>
        <Text style={styles.subtitle}>
          Explora el punto en el mapa y abre la navegación para llegar.
        </Text>
      </View>

      <View style={styles.mapContainer}>
        <MapView
          provider={Platform.OS === "android" ? PROVIDER_GOOGLE : undefined}
          style={styles.map}
          initialRegion={initialRegion}
          showsCompass
          showsScale
          loadingEnabled
        >
          {PET_MARKERS.map((pet) => (
            <Marker
              key={pet.id}
              coordinate={{ latitude: pet.latitude, longitude: pet.longitude }}
              title={`${PET_EMOJI[pet.id]} ${pet.petName}`}
              description={pet.description}
              onCalloutPress={() => setSelectedPet(pet)}
            />
          ))}
        </MapView>
      </View>

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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    gap: 12,
  },
  header: {
    paddingTop: 8,
    gap: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#4B5563",
    fontSize: 14,
  },
  mapContainer: {
    flex: 1,
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    margin: 10,
  },
  map: {
    flex: 1,
  },
  button: {
    height: 52,
    borderRadius: 12,
    backgroundColor: "#111827",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
