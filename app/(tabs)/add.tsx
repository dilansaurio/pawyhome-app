import { Text, View } from "@/components/Themed";
import ButtonSections from "@/components/molecules/ButtonSections";
import ScreenLayout from "@/components/template/screenlayout";
import { useRouter } from "expo-router";

const DATA = [
  {
    id: "1",
    // icon: "",
    title: "Perro",
  },
  {
    id: "2",
    // icon: "",
    title: "Gato",
  },
  {
    id: "3",
    // icon: "",
    title: "Conejo",
  },
  {
    id: "4",
    // icon: "",
    title: "Hámster",
  },
];

export default function Add() {
  const router = useRouter();

  const AddHeader = () => {
    return (
      <View className="items-center justify-center pt-6">
        <Text className="pt-3 font-bold text-2xl">Elige una mascota</Text>
      </View>
    );
  };

  return (
    <ScreenLayout>
      {/* title */}
      <AddHeader />
      {/* sections: Perro, Gato, Conejo, Hámster */}
      <View className="flex pt-10 ">
        <ButtonSections
          onPress={(item) =>
            router.push({
              pathname: "/screen/addscreen/StepOne",
              params: { petType: item.title },
            })
          }
          items={DATA}
          numColumns={2}
        />
      </View>
    </ScreenLayout>
  );
}
