import { Text, View } from "@/components/Themed";
import { StyleSheet } from "react-native";

export default function FindHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Encuentra una mascota cerca</Text>
      <Text style={styles.subtitle}>
        Explora el punto en el mapa y abre la navegación para llegar.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 8,
    gap: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#4B5563",
    fontSize: 14,
  },
});
