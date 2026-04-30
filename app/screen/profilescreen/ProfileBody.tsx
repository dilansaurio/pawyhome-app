import ButtonList from "@/components/molecules/ButtonList";
import { View } from "@/components/Themed";
import { router } from "expo-router";

export default function ProfileHeader() {
  const DATA = [
    {
      id: "1",
      title: "Mi perfil",
      iconName: "user",
    },
    {
      id: "2",
      title: "Mis adopciones",
      iconName: "paw",
      onPress: () => router.push("/screen/profilescreen/MisAdopciones"),
    },
    {
      id: "3",
      title: "Configuración",
      iconName: "cog",
      onPress: () => router.push("/screen/settingsscreen/Settings"),
    },
  ];

  return (
    <View className="flex px-6 pt-10">
      <ButtonList items={DATA} />
    </View>
  );
}
