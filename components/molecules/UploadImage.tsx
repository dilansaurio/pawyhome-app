import { Text } from "@/components/Themed";
import { UploadImageProps } from "@/types/components/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Image, Modal, TouchableOpacity, View } from "react-native";
import { useUploadImage } from "../../hooks/components/useUploadImage";

const UploadImage = ({ maxPhotos = 4, onChange }: UploadImageProps) => {
  const useUpload = useUploadImage({ maxPhotos, onChange });
  const {
    images,
    modalVisible,
    hasImageAtSlot,
    handleOpenModal,
    handleCloseModal,
    handleTakePhoto,
    handleSelectFromGallery,
    handleDeletePhoto,
  } = useUpload;

  return (
    <>
      {/* Grid de fotos */}
      <View className="flex flex-wrap flex-row justify-center">
        {images.map((uri, index) => (
          <TouchableOpacity
            key={index}
            className="w-[140px] h-[120px] bg-[#D1D5DB] rounded-md justify-center items-center overflow-hidden m-4"
            onPress={() => handleOpenModal(index)}
            activeOpacity={0.8}
          >
            {uri ? (
              <Image
                source={{ uri }}
                className="w-full h-full"
                resizeMode="cover"
              />
            ) : (
              <>
                <Text className="text-3xl text-gray-400">+</Text>
                <Text className="text-xs text-gray-400 mt-1">Añadir foto</Text>
              </>
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Bottom sheet modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <TouchableOpacity
          className=" flex-1 bg-[rgba(0,0,0,0.4)]  justify-end"
          activeOpacity={1}
          onPress={handleCloseModal}
        >
          <View className="bg-white rounded-t-2xl px-6 pt-6 pb-10 gap-1">
            <Text className="text-lg font-semibold text-center mb-2">
              Foto de mascota
            </Text>

            <TouchableOpacity
              className="flex-row items-center gap-3 py-3"
              onPress={handleTakePhoto}
            >
              <FontAwesome name="camera" size={22} color="#4B5563" />
              <Text className="text-base">Tomar foto</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center gap-3 py-3"
              onPress={handleSelectFromGallery}
            >
              <FontAwesome name="image" size={22} color="#4B5563" />
              <Text className="text-base">Seleccionar de galería</Text>
            </TouchableOpacity>

            {hasImageAtSlot && (
              <TouchableOpacity
                className="flex-row items-center gap-3 py-3"
                onPress={handleDeletePhoto}
              >
                <FontAwesome name="trash" size={22} color="#EF4444" />
                <Text className="text-base text-red-500">Eliminar foto</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              className="mt-2 items-center py-3 rounded-xl bg-gray-100"
              onPress={handleCloseModal}
            >
              <Text className="text-gray-600">Cancelar</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default UploadImage;
