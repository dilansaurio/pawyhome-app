import { Stack } from "expo-router";

export default function ScreenLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="addscreen/StepOne"
        options={{ title: "Agregar Mascota" }}
      />
      <Stack.Screen
        name="settingsscreen/Settings"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
