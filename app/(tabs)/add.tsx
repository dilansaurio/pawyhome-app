import { View } from "@/components/Themed";
import ButtonSections from "@/components/molecules/ButtonSections";
import ScreenLayout from "@/components/template/screenlayout";
import { useRouter } from "expo-router";
import { AddHeader } from "../screen/addscreen/components/AddHeader";
import { DATA_SECTIONS } from "../screen/addscreen/data";

export default function Add() {
  const router = useRouter();

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
          items={DATA_SECTIONS}
          numColumns={2}
        />
      </View>
    </ScreenLayout>
  );
}
