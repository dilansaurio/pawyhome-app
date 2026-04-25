import { Text, View } from "@/components/Themed";
import { TouchableOpacity } from "react-native";

type ConfirmModalContentProps = {
  setShowConfirmModal: (show: boolean) => void;
  handleSaveLocal: () => void;
  isSaving: boolean;
};

export const ConfirmModalContent = ({
  setShowConfirmModal,
  handleSaveLocal,
  isSaving,
}: ConfirmModalContentProps) => {
  return (
    <View className="p-5">
      <Text className="text-lg font-semibold text-center text-gray-800">
        Estas seguro que deseas continuar?
      </Text>
      <Text className="text-sm text-gray-500 text-center mt-2">
        Al aceptar, se guardara esta informacion de forma local.
      </Text>

      <View className="flex-row mt-6 gap-3">
        <TouchableOpacity
          className="flex-1 items-center justify-center rounded-lg border border-gray-300 py-3"
          onPress={() => setShowConfirmModal(false)}
          disabled={isSaving}
        >
          <Text className="text-gray-700 font-medium">Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-1 items-center justify-center rounded-lg bg-[#3E8BAF] py-3"
          onPress={handleSaveLocal}
          disabled={isSaving}
        >
          <Text className="text-white font-medium">
            {isSaving ? "Guardando.." : "Aceptar"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
