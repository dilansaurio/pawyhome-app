import Search from "@/components/atom/Search";
import { ImageCard } from "@/components/molecules/Card";
import { Text, View } from "@/components/Themed";

export default function HomeListHeader({ onPress }: { onPress: () => void }) {
  return (
    <>
      <View className="p-3 gap-3">
        <Text className="font-bold text-xl p-3">¡Bienvenido a PawyHome!</Text>

        <View className="px-3">
          <ImageCard
            title="Un nuevo amigo te espera"
            description="Encuentra a tu compañero peludo ideal hoy mismo."
            source={require("@/assets/images/home/header_dog.png")}
            onPress={onPress}
          />
        </View>
        {/* Title */}
        <Text className="font-bold text-xl pt-10 px-3 ">
          Mascotas en adopción
        </Text>
        {/* Search */}
        <View className=" w-full gap-3 px-3">
          <Search placeholder="Buscar.." />
        </View>
      </View>
    </>
  );
}
