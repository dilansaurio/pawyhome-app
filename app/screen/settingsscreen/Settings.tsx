import { Text, View } from "@/components/Themed";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Alert, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const handleLogout = () => {
    Alert.alert("Cerrar sesión", "¿Estás seguro que deseas cerrar sesión?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Cerrar sesión",
        style: "destructive",
        onPress: async () => {
          await AsyncStorage.multiRemove([
            "onboardingCompleted",
            "userProfile",
          ]);
          router.replace("/login");
        },
      },
    ]);
  };

  return (
    <SafeAreaView
      className="flex-1 bg-[#F5F9FC]"
      edges={["top", "left", "right"]}
    >
      {/* Header */}
      <View className="flex-row items-center px-6 py-4 bg-transparent">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <FontAwesome name="angle-left" size={28} color="#111827" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold" style={{ color: "#111827" }}>
          Configuración
        </Text>
      </View>

      {/* Dev options */}
      <View className="mt-6 mx-6 rounded-2xl bg-white overflow-hidden">
        <TouchableOpacity
          onPress={() => {
            AsyncStorage.multiRemove([
              "onboardingCompleted",
              "userProfile",
            ]).then(() => router.replace("/onboarding"));
          }}
          className="flex-row items-center px-6 py-5"
          style={{ gap: 16 }}
        >
          <FontAwesome name="refresh" size={22} color="#8FE0E3" />
          <Text
            className="text-base font-semibold"
            style={{ color: "#8FE0E3" }}
          >
            Onboarding
          </Text>
        </TouchableOpacity>
        <View className="h-px mx-6 bg-gray-100" />
        <TouchableOpacity
          onPress={() => {
            AsyncStorage.removeItem("userProfile").then(() =>
              router.replace("/login"),
            );
          }}
          className="flex-row items-center px-6 py-5"
          style={{ gap: 16 }}
        >
          <FontAwesome name="undo" size={20} color="#94A3B8" />
          <Text
            className="text-base font-semibold"
            style={{ color: "#94A3B8" }}
          >
            Resetear sesión
          </Text>
        </TouchableOpacity>
      </View>

      {/* Options */}
      <View className="mt-4 mx-6 rounded-2xl bg-white overflow-hidden">
        <TouchableOpacity
          onPress={handleLogout}
          className="flex-row items-center px-6 py-5"
          style={{ gap: 16 }}
        >
          <FontAwesome name="sign-out" size={22} color="#F87171" />
          <Text
            className="text-base font-semibold"
            style={{ color: "#F87171" }}
          >
            Cerrar sesión
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
