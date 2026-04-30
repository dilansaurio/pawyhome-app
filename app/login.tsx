import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // TODO: Implement real authentication
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
          <View className="flex-1 px-6 justify-center py-8">
            {/* Logo & title */}
            <View className="items-center mb-10">
              <View
                className="w-20 h-20 rounded-2xl items-center justify-center mb-4"
                style={{ backgroundColor: "#FFCD5E" }}
              >
                <Text className="text-white text-4xl">🐾</Text>
              </View>
              <Text className="text-3xl font-bold" style={{ color: "#111827" }}>
                PawyHome
              </Text>
              <Text
                className="text-base mt-2 text-center"
                style={{ color: "#6B7280" }}
              >
                Encuentra tu compañero perfecto
              </Text>
            </View>

            {/* Form */}
            <View style={{ gap: 16 }}>
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

              <View>
                <Text
                  className="text-sm font-medium mb-2"
                  style={{ color: "#111827" }}
                >
                  Contraseña
                </Text>
                <View
                  className="w-full h-12 flex-row items-center rounded-xl border px-4"
                  style={{ borderColor: "#E5E7EB", backgroundColor: "#F8FAFC" }}
                >
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="••••••••"
                    placeholderTextColor="#94a3b8"
                    secureTextEntry={!showPassword}
                    style={{
                      flex: 1,
                      color: "#111827",
                      fontSize: 16,
                    }}
                  />
                  <TouchableOpacity onPress={() => setShowPassword((v) => !v)}>
                    <FontAwesome
                      name={showPassword ? "eye-slash" : "eye"}
                      size={20}
                      color="#94a3b8"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity className="self-end">
                <Text
                  className="text-sm font-medium"
                  style={{ color: "#3E8BAF" }}
                >
                  ¿Olvidaste tu contraseña?
                </Text>
              </TouchableOpacity>
            </View>

            {/* Login button */}
            <TouchableOpacity
              onPress={handleLogin}
              className="w-full py-4 rounded-xl items-center mt-8"
              style={{ backgroundColor: "#FFCD5E" }}
            >
              <Text className=" text-base font-semibold">Iniciar sesión</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View className="flex-row items-center my-6">
              <View
                className="flex-1 h-px"
                style={{ backgroundColor: "#E5E7EB" }}
              />
              <Text className="mx-4 text-sm" style={{ color: "#CCCCCC" }}>
                o continúa con
              </Text>
              <View
                className="flex-1 h-px"
                style={{ backgroundColor: "#E5E7EB" }}
              />
            </View>

            {/* Social login placeholder */}
            <TouchableOpacity
              className="w-full py-4 rounded-xl items-center border"
              style={{ borderColor: "#E5E7EB" }}
            >
              <Text
                className="text-base font-medium"
                style={{ color: "#111827" }}
              >
                🌐 Continuar con Google
              </Text>
            </TouchableOpacity>

            {/* Register link */}
            <View className="flex-row justify-center mt-8">
              <Text style={{ color: "#6B7280" }}>¿No tienes cuenta? </Text>
              <TouchableOpacity onPress={() => router.push("/register")}>
                <Text className="font-semibold" style={{ color: "#3E8BAF" }}>
                  Regístrate
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
