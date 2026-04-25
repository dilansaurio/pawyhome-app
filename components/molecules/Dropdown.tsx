import { useDropdown } from "@/hooks/components/useDropdown";
import { DropdownProps } from "@/types/components/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "../Themed";

export default function Dropdown({
  label = "Dropdown",
  placeholder = "Selecciona una opción",
  options,
  value,
  defaultValue,
  onChange,
  disabled = false,
  helperText,
  errorText,
}: DropdownProps) {
  const { open, setOpen, currentValue, selectedOption, handleSelect } =
    useDropdown({
      options,
      value,
      defaultValue,
      onChange,
    });

  return (
    <View className="w-full">
      {label ? (
        <Text className="text-gray-700 text-sm mb-2">{label}</Text>
      ) : null}

      <TouchableOpacity
        onPress={() => !disabled && setOpen(true)}
        disabled={disabled}
        className={`border rounded-lg px-4 py-3 flex-row items-center justify-between ${
          errorText
            ? "border-red-500"
            : disabled
              ? "border-gray-200 bg-gray-100"
              : "border-gray-300"
        }`}
        activeOpacity={0.8}
      >
        <Text
          className={selectedOption ? "text-gray-700" : "text-gray-400"}
          numberOfLines={1}
        >
          {selectedOption?.label ?? placeholder}
        </Text>
        <FontAwesome name={open ? "chevron-up" : "chevron-down"} size={14} />
      </TouchableOpacity>

      {errorText ? (
        <Text className="text-red-500 text-xs mt-1">{errorText}</Text>
      ) : helperText ? (
        <Text className="text-gray-500 text-xs mt-1">{helperText}</Text>
      ) : null}

      <Modal
        animationType="fade"
        transparent
        visible={open}
        onRequestClose={() => setOpen(false)}
      >
        <Pressable style={styles.backdrop} onPress={() => setOpen(false)}>
          <Pressable style={styles.modalCard} onPress={() => null}>
            <Text className="text-base font-semibold text-gray-800 mb-2">
              {label}
            </Text>

            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                const isSelected = item.value === currentValue;

                return (
                  <TouchableOpacity
                    onPress={() => handleSelect(item)}
                    className={`px-4 py-3 rounded-lg mb-2 border ${
                      isSelected
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <Text
                      className={
                        isSelected
                          ? "text-blue-700 font-semibold"
                          : "text-gray-700"
                      }
                    >
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                );
              }}
              ListEmptyComponent={
                <Text className="text-gray-500 text-sm py-2">
                  No hay opciones disponibles
                </Text>
              }
            />
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  modalCard: {
    backgroundColor: "white",
    borderRadius: 14,
    maxHeight: "60%",
    padding: 16,
  },
});
