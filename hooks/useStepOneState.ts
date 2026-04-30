import { useLocalSearchParams, useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useState } from "react";
import { Alert } from "react-native";
import { SIZE_PET } from "../app/data/petData";

const STEP_ONE_STORAGE_KEY = "pawyhome_step-one";

export const useStepOneState = () => {
  const router = useRouter();
  const { petType } = useLocalSearchParams<{ petType: string }>();

  const [petForm, setPetForm] = useState({ breed: "", size: "", city: "" });
  const [selectedHealthIds, setSelectedHealthIds] = useState<string[]>([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const selectedSizeId =
    SIZE_PET.find((sizeOption) => sizeOption.value === petForm.size)?.id ?? "";

  const handleBreedChange = (selectedValue: string) => {
    setPetForm((prev) => ({ ...prev, breed: selectedValue }));
  };

  const handleCityChange = (selectedValue: string) => {
    setPetForm((prev) => ({ ...prev, city: selectedValue }));
  };

  const handleSizeChange = (item: { id: string; title: string }) => {
    const selectedSize = SIZE_PET.find(
      (sizeOption) => sizeOption.id === item.id,
    );
    if (!selectedSize) return;
    setPetForm((prev) => ({ ...prev, size: selectedSize.value }));
  };

  const handleHealthToggle = (id: string) => {
    setSelectedHealthIds((prev) =>
      prev.includes(id) ? prev.filter((h) => h !== id) : [...prev, id],
    );
  };

  const handleNext = () => setShowConfirmModal(true);

  const handleSaveLocal = async () => {
    try {
      setIsSaving(true);

      const payload = {
        petType: petType ?? "",
        breed: petForm.breed,
        city: petForm.city,
        size: petForm.size,
        updatedAt: new Date().toISOString(),
      };

      await SecureStore.setItemAsync(
        STEP_ONE_STORAGE_KEY,
        JSON.stringify(payload),
      );
      setShowConfirmModal(false);
      router.replace("/(tabs)/index");
    } catch (error) {
      console.error("Error al guardar StepOne localmente", error);
      Alert.alert(
        "Error",
        "No se pudo guardar la información. Inténtalo de nuevo.",
      );
    } finally {
      setIsSaving(false);
    }
  };

  return {
    petType,
    petForm,
    showConfirmModal,
    setShowConfirmModal,
    isSaving,
    selectedSizeId,
    selectedHealthIds,
    handleBreedChange,
    handleCityChange,
    handleSizeChange,
    handleHealthToggle,
    handleNext,
    handleSaveLocal,
  };
};
