import { SelectOptionsProps } from "@/types/components/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../Themed";

export default function SelectOptions({
  options,
  selectedIds,
  onToggle,
  editing = false,
  numColumns = 2,
}: SelectOptionsProps) {
  return (
    <FlatList
      data={options}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      scrollEnabled={false}
      renderItem={({ item }) => {
        const isSelected = selectedIds.includes(item.id);

        return (
          <TouchableOpacity
            onPress={() => onToggle(item.id)}
            style={[styles.row, isSelected && styles.rowSelected]}
            activeOpacity={0.7}
          >
            <Text style={[styles.label, isSelected && styles.labelSelected]}>
              {item.title}
            </Text>

            {editing && (
              <View style={styles.iconContainer}>
                {isSelected ? (
                  <FontAwesome name="check" size={16} color="#1F7A8C" />
                ) : (
                  <FontAwesome name="" size={16} color="#9CA3AF" />
                )}
              </View>
            )}
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
    marginVertical: 4,
  },
  rowSelected: {
    borderColor: "#1F7A8C",
    backgroundColor: "#EEF9FA",
  },
  label: {
    fontSize: 14,
    color: "#374151",
  },
  labelSelected: {
    color: "#1F7A8C",
    fontWeight: "600",
  },
  iconContainer: {
    backgroundColor: "transparent",
  },
});
