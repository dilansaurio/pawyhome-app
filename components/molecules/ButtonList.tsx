import { ButtonListProps } from "@/types/components/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FlatList, TouchableOpacity } from "react-native";
import { Text, View } from "../Themed";

export default function ButtonList({ items }: ButtonListProps) {
  return (
    <>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View className="pt-4 justify-center">
            <TouchableOpacity className="button-list">
              {item.iconName && (
                <FontAwesome
                  name={item.iconName}
                  size={22}
                  color="black"
                  className="mr-4"
                />
              )}

              <Text className=" text-neutral-text font-bold text-lg left-10">
                {item.title}
              </Text>
            </TouchableOpacity>

            <FontAwesome
              name="angle-right"
              size={22}
              color="black"
              className="arrow-right"
            />
          </View>
        )}
      />
    </>
  );
}
