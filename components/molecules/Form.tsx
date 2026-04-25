import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "../Themed";

type FormProps = {
  numColumns?: number;
  data: { id?: string; title: string; description: string }[];
};

export default function Form({ numColumns = 1, data }: FormProps) {
  return (
    <FlatList
      key={numColumns}
      data={data}
      numColumns={numColumns}
      keyExtractor={(item, index) => item.id ?? index.toString()}
      scrollEnabled={false}
      contentContainerStyle={styles.container}
      {...(numColumns > 1 && { columnWrapperStyle: styles.columnWrapper })}
      renderItem={({ item }) => (
        <View style={[styles.item, numColumns > 1 && styles.itemMultiCol]}>
          <Text className="text-sm text-gray-500">{item.title}</Text>
          <Text className="text-base font-bold">{item.description}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    gap: 8,
  },
  columnWrapper: {
    gap: 8,
  },
  item: {
    flexDirection: "column",
    gap: 2,
  },
  itemMultiCol: {
    flex: 1,
  },
});
