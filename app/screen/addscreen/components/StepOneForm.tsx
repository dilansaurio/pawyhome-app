import TextInputComponent from "@/components/atom/TextInput";
import ButtonSections from "@/components/molecules/ButtonSections";
import Dropdown from "@/components/molecules/Dropdown";
import SelectOptions from "@/components/molecules/SelectOptions";
import { Text, View } from "@/components/Themed";
import { FlatList } from "react-native";
import { CHILE_REGIONS } from "../../../data/Citys";
import { BREED_PET, PET_HEALTH_ISSUES, SIZE_PET } from "../../../data/petData";
import { DATA } from "../data";

type StepOneFormProps = {
  breedValue: string;
  cityValue: string;
  selectedSizeId: string;
  selectedHealthIds: string[];
  onBreedChange: (value: string) => void;
  onCityChange: (value: string) => void;
  onSizeChange: (item: { id: string; title: string }) => void;
  onHealthToggle: (id: string) => void;
};

export const StepOneForm = ({
  breedValue,
  cityValue,
  selectedSizeId,
  selectedHealthIds,
  onBreedChange,
  onCityChange,
  onSizeChange,
  onHealthToggle,
}: StepOneFormProps) => {
  return (
    <>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View className="px-10 mt-4">
            {item.name === "Raza" ? (
              <>
                <Dropdown
                  label="Raza"
                  placeholder="Selecciona la raza"
                  options={BREED_PET}
                  value={breedValue}
                  onChange={onBreedChange}
                  helperText="Elige la raza que mejor describa a tu mascota"
                />
                <View className="mt-4">
                  <Dropdown
                    label="Ciudad"
                    placeholder="Selecciona la región"
                    options={CHILE_REGIONS.map(({ label, value }) => ({
                      label,
                      value,
                    }))}
                    value={cityValue}
                    onChange={onCityChange}
                    helperText="Región donde se encuentra la mascota"
                  />
                </View>
              </>
            ) : (
              <TextInputComponent titleInput={item.name} />
            )}
            <View></View>
          </View>
        )}
      />
      <View className="px-10 mt-4">
        <Text className="text-sm font-semibold text-gray-600 mb-2">Tamaño</Text>
        <ButtonSections
          numColumns={4}
          showIcon={false}
          selectedId={selectedSizeId}
          onPress={onSizeChange}
          containerStyle={{
            paddingHorizontal: 0,
            marginTop: 0,
          }}
          buttonStyle={{
            minHeight: 45,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
          textStyle={{ fontSize: 10, textAlign: "center" }}
          items={SIZE_PET.map(({ id, title }) => ({ id, title }))}
        />
      </View>
      <View className="px-10 mt-4">
        <Text className="text-sm font-semibold text-gray-600 mb-2">Salud</Text>
        <Text className="text-xs text-gray-500 mb-4">
          Selecciona los problemas de salud que tu mascota pueda tener
        </Text>
        <SelectOptions
          options={PET_HEALTH_ISSUES}
          selectedIds={selectedHealthIds}
          numColumns={2}
          onToggle={onHealthToggle}
          editing
        />
      </View>
    </>
  );
};
