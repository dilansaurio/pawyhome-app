import { PetCategory } from "@/app/data/category";
import { DESTINATION, PET_MARKERS } from "@/app/data/findMap";
import { PET_EMOJI } from "@/app/data/petData";
import ModalComponent from "@/components/molecules/Modal";
import { View } from "@/components/Themed";
import { useMemo, useState } from "react";
import { Platform } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import HomeModalContent from "../homescreen/HomeModalContent";

export default function FindContent() {
  const [selectedPet, setSelectedPet] = useState<PetCategory | null>(null);

  const initialRegion = useMemo(
    () => ({
      ...DESTINATION,
      latitudeDelta: 0.03,
      longitudeDelta: 0.03,
    }),
    [],
  );

  //   const openNavigation = async () => {
  //     const destination = `${DESTINATION.latitude},${DESTINATION.longitude}`;
  //     const navigationUrl =
  //       Platform.OS === "ios"
  //         ? `http://maps.apple.com/?daddr=${destination}`
  //         : Platform.OS === "android"
  //           ? `google.navigation:q=${destination}`
  //           : `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

  //     try {
  //       const supported = await Linking.canOpenURL(navigationUrl);

  //       if (supported) {
  //         await Linking.openURL(navigationUrl);
  //         return;
  //       }

  //       await Linking.openURL(
  //         `https://www.google.com/maps/search/?api=1&query=${destination}`,
  //       );
  //     } catch {
  //       Alert.alert("No fue posible abrir la navegación");
  //     }
  //   };

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF",
          paddingHorizontal: 16,
          gap: 12,
        }}
      >
        <MapView
          provider={Platform.OS === "android" ? PROVIDER_GOOGLE : undefined}
          style={{ flex: 1 }}
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
    </>
  );
}
