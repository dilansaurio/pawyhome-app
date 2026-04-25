import { Text, View } from "@/components/Themed";
import { TouchableOpacity } from "react-native";

export default function HomeImageCardModalContent({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <View className="p-6 items-center">
      {/* Emoji decorativo */}
      <Text className="text-6xl mb-4">🐾</Text>

      {/* Título */}
      <Text className="text-2xl font-bold text-center text-gray-800 mb-1">
        Un nuevo amigo te espera...
      </Text>

      {/* Subtítulo */}
      <Text className="text-base text-[#1F7A8C] text-center font-medium mb-4">
        Encuentra a tu compañero peludo ideal hoy mismo.
      </Text>

      {/* Separador */}
      <View className="w-16 h-1 bg-brand-primary rounded-full mb-5" />

      {/* Cuerpo informativo */}
      <Text className="text-gray-600 text-sm text-center leading-6 mb-3">
        Cada año, miles de mascotas esperan en refugios una segunda oportunidad.
        Adoptar no solo cambia la vida de un animal — también cambia la tuya.
      </Text>

      <View className="bg-[#EEF3F5] rounded-2xl p-4 w-full mb-5 gap-2">
        <View className="flex-row items-center gap-2">
          <Text>🐶</Text>
          <Text className="text-sm text-gray-700">
            Perros, gatos, conejos y más
          </Text>
        </View>
        <View className="flex-row items-center gap-2">
          <Text>💉</Text>
          <Text className="text-sm text-gray-700">
            Vacunados y con seguimiento veterinario
          </Text>
        </View>
        <View className="flex-row items-center gap-2">
          <Text>🏠</Text>
          <Text className="text-sm text-gray-700">
            En busca de un hogar lleno de amor
          </Text>
        </View>
        <View className="flex-row items-center gap-2">
          <Text>❤️</Text>
          <Text className="text-sm text-gray-700">
            Adoptar es el acto más bonito que puedes hacer
          </Text>
        </View>
      </View>

      {/* Botón cerrar */}
      <TouchableOpacity
        className="w-full min-h-[44px] rounded-[24px] px-4 items-center justify-center bg-brand-primary"
        onPress={onClose}
      >
        <Text style={{ color: "white" }} className="font-semibold text-base">
          Cerrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
