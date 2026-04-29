import { PetCategory } from "@/app/data/category";
import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "adoptions";

export async function getAdoptions(): Promise<PetCategory[]> {
  const raw = await AsyncStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}

export async function saveAdoption(pet: PetCategory): Promise<void> {
  const current = await getAdoptions();
  if (current.find((p) => p.id === pet.id)) return;
  await AsyncStorage.setItem(KEY, JSON.stringify([...current, pet]));
}
