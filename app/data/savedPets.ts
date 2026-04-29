import AsyncStorage from "@react-native-async-storage/async-storage";
import { PetCategory } from "./category";

const SAVED_PETS_KEY = "@pawyhome/saved-pets";

export async function getSavedPets(): Promise<PetCategory[]> {
  try {
    const raw = await AsyncStorage.getItem(SAVED_PETS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export async function appendSavedPet(pet: PetCategory): Promise<void> {
  const current = await getSavedPets();
  await AsyncStorage.setItem(SAVED_PETS_KEY, JSON.stringify([...current, pet]));
}
