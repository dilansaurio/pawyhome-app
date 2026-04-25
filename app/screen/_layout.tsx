import { Stack } from "expo-router";

export default function ScreenLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="addscreen/StepOne"
        options={{ title: "Agregar Mascota" }}
      />
    </Stack>
  );
}
