import { ButtonSectionsProps } from "@/types/components/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "../Themed";

export default function ButtonSections({
  items,
  numColumns,
  onPress,
  selectedId,
  containerStyle,
  buttonStyle,
  selectedButtonStyle,
  textStyle,
  selectedTextStyle,
  showIcon = true,
  iconColor = "black",
  iconSize = 24,
}: ButtonSectionsProps) {
  return (
    <FlatList
      key={numColumns}
      data={items}
      keyExtractor={(item) => item.id}
      style={[styles.list, containerStyle]}
      scrollEnabled={false}
      numColumns={numColumns}
      {...(numColumns &&
        numColumns > 1 && {
          columnWrapperStyle: styles.columnWrapper,
        })}
      renderItem={({ item }) => {
        const isSelected = item.id === selectedId;

        return (
          <TouchableOpacity
            onPress={() => onPress?.(item)}
            style={[
              styles.button,
              buttonStyle,
              isSelected ? styles.selectedButton : null,
              isSelected ? selectedButtonStyle : null,
            ]}
          >
            {showIcon ? (
              <FontAwesome name="paw" size={iconSize} color={iconColor} />
            ) : null}
            <Text
              style={[
                styles.text,
                textStyle,
                isSelected ? styles.selectedText : null,
                isSelected ? selectedTextStyle : null,
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
    marginTop: 0,
  },
  columnWrapper: {
    justifyContent: "space-between",
    gap: 12,
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#D7DEE3",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginTop: 10,
    minHeight: 88,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  text: {
    marginTop: 8,
    fontWeight: "500",
  },
  selectedButton: {
    borderColor: "#3E8BAF",
    backgroundColor: "#E9F5FA",
  },
  selectedText: {
    color: "#215F7A",
    fontWeight: "700",
  },
});
