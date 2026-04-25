import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export const useUploadImage = ({
  maxPhotos = 4,
  onChange,
}: {
  maxPhotos?: number;
  onChange?: (images: (string | null)[]) => void;
}) => {
  const [images, setImages] = useState<(string | null)[]>(
    Array(maxPhotos).fill(null),
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

  const updateImages = (next: (string | null)[]) => {
    setImages(next);
    onChange?.(next);
  };

  const handleOpenModal = (index: number) => {
    setSelectedSlot(index);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedSlot(null);
  };

  const handleTakePhoto = async () => {
    const slotIndex = selectedSlot;
    handleCloseModal();

    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") return;

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled && slotIndex !== null) {
      const next = [...images];
      next[slotIndex] = result.assets[0].uri;
      updateImages(next);
    }
  };

  const handleSelectFromGallery = async () => {
    const slotIndex = selectedSlot;
    handleCloseModal();

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled && slotIndex !== null) {
      const next = [...images];
      next[slotIndex] = result.assets[0].uri;
      updateImages(next);
    }
  };

  const handleDeletePhoto = () => {
    const slotIndex = selectedSlot;
    handleCloseModal();
    if (slotIndex !== null) {
      const next = [...images];
      next[slotIndex] = null;
      updateImages(next);
    }
  };

  const hasImageAtSlot = selectedSlot !== null && images[selectedSlot] != null;

  return {
    images,
    modalVisible,
    selectedSlot,
    hasImageAtSlot,
    handleOpenModal,
    handleCloseModal,
    handleTakePhoto,
    handleSelectFromGallery,
    handleDeletePhoto,
  };
};
