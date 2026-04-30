import { useRouter } from "expo-router";
import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../Themed";

type StepFooterProps = {
  onNext: () => void;
  nextLabel?: string;
  loading?: boolean;
};

export function StepFooter({
  onNext,
  nextLabel = "Siguiente",
  loading = false,
}: StepFooterProps) {
  const router = useRouter();

  return (
    <View className="flex flex-row items-center p-4 border-t border-gray-200">
      <TouchableOpacity
        className="flex-1 w-full items-center border border-gray-300 rounded-lg py-3"
        onPress={() => router.back()}
      >
        <Text className="color-[#666] text-base">Atrás</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.nextButton, loading && styles.disabled]}
        onPress={onNext}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.nextText}>{nextLabel}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nextButton: {
    backgroundColor: "#FFCD5E",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    width: "50%",
    marginLeft: 12,
  },
  nextText: { color: "white", fontSize: 15 },
  disabled: { opacity: 0.5 },
});
