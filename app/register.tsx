import { CHILE_REGIONS } from "@/app/data/Citys";
import Dropdown from "@/components/molecules/Dropdown";
import { saveUserProfile } from "@/hooks/useUserProfile";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import { useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const REGION_OPTIONS = CHILE_REGIONS.map((r) => ({
  label: r.label,
  value: r.value,
}));

const SEX_OPTIONS = [
  { label: "Masculino", value: "Masculino" },
  { label: "Femenino", value: "Femenino" },
];

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const handleRegister = async () => {
    if (
      !name.trim() ||
      !sex ||
      !region ||
      !city.trim() ||
      !email.trim() ||
      !confirmEmail.trim()
    ) {
      Alert.alert("Campos incompletos", "Por favor completa todos los campos.");
      return;
    }
    if (email.trim() !== confirmEmail.trim()) {
      Alert.alert("Error", "Los correos electrónicos no coinciden.");
      return;
    }
    const regionLabel =
      CHILE_REGIONS.find((r) => r.value === region)?.label ?? region;

    await saveUserProfile({
      name: name.trim(),
      sex: sex as "Masculino" | "Femenino",
      region: regionLabel,
      city: city.trim(),
      email: email.trim(),
    });

    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 px-6 py-8">
            {/* Header */}
            <View className="flex-row items-center mb-8">
              <TouchableOpacity onPress={() => router.back()} className="mr-4">
                <FontAwesome name="angle-left" size={28} color="#111827" />
              </TouchableOpacity>
              <Text className="text-2xl font-bold" style={{ color: "#111827" }}>
                Crear cuenta
              </Text>
            </View>

            {/* Form */}
            <View style={{ gap: 18 }}>
              {/* Nombre */}
              <View>
                <Text
                  className="text-sm font-medium mb-2"
                  style={{ color: "#111827" }}
                >
                  Nombre completo
                </Text>
                <TextInput
                  value={name}
                  onChangeText={setName}
                  placeholder="Tu nombre"
                  placeholderTextColor="#94a3b8"
                  autoCapitalize="words"
                  className="w-full h-12 px-4 rounded-xl border"
                  style={{
                    borderColor: "#E5E7EB",
                    backgroundColor: "#F8FAFC",
                    color: "#111827",
                    fontSize: 16,
                  }}
                />
              </View>

              {/* Sexo */}
              <View>
                <Dropdown
                  label="Sexo"
                  placeholder="Selecciona tu sexo"
                  options={SEX_OPTIONS}
                  value={sex}
                  onChange={(value) => setSex(value)}
                />
              </View>

              {/* Región */}
              <View>
                <Dropdown
                  label="Región"
                  placeholder="Selecciona tu región"
                  options={REGION_OPTIONS}
                  value={region}
                  onChange={(value) => setRegion(value)}
                />
              </View>

              {/* Ciudad */}
              <View>
                <Text
                  className="text-sm font-medium mb-2"
                  style={{ color: "#111827" }}
                >
                  Ciudad
                </Text>
                <TextInput
                  value={city}
                  onChangeText={setCity}
                  placeholder="Tu ciudad"
                  placeholderTextColor="#94a3b8"
                  autoCapitalize="words"
                  className="w-full h-12 px-4 rounded-xl border"
                  style={{
                    borderColor: "#E5E7EB",
                    backgroundColor: "#F8FAFC",
                    color: "#111827",
                    fontSize: 16,
                  }}
                />
              </View>

              {/* Email */}
              <View>
                <Text
                  className="text-sm font-medium mb-2"
                  style={{ color: "#111827" }}
                >
                  Correo electrónico
                </Text>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="tu@correo.com"
                  placeholderTextColor="#94a3b8"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  className="w-full h-12 px-4 rounded-xl border"
                  style={{
                    borderColor: "#E5E7EB",
                    backgroundColor: "#F8FAFC",
                    color: "#111827",
                    fontSize: 16,
                  }}
                />
              </View>

              {/* Confirmar Email */}
              <View>
                <Text
                  className="text-sm font-medium mb-2"
                  style={{ color: "#111827" }}
                >
                  Repetir correo electrónico
                </Text>
                <TextInput
                  value={confirmEmail}
                  onChangeText={setConfirmEmail}
                  placeholder="tu@correo.com"
                  placeholderTextColor="#94a3b8"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  className="w-full h-12 px-4 rounded-xl border"
                  style={{
                    borderColor: "#E5E7EB",
                    backgroundColor: "#F8FAFC",
                    color: "#111827",
                    fontSize: 16,
                  }}
                />
              </View>
            </View>

            {/* Register button */}
            <TouchableOpacity
              onPress={handleRegister}
              className="w-full py-4 rounded-xl items-center mt-10 mb-4"
              style={{ backgroundColor: "#3E8BAF" }}
            >
              <Text className="text-white text-base font-semibold">
                Registrarse
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
