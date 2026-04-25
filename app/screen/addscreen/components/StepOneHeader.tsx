import { Text, View } from "@/components/Themed";
import UploadImage from "@/components/molecules/UploadImage";
import React from "react";
import { StepOneHeaderProps } from "../types";

export const StepOneHeader = ({
  petType,
  onImagesChange,
}: StepOneHeaderProps) => {
  return (
    <View className="items-center justify-center gap-3">
      <Text className="text-2xl font-bold pt-4">Agregar {petType}</Text>
      <UploadImage maxPhotos={4} onChange={onImagesChange} />
    </View>
  );
};
