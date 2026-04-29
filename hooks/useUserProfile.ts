import AsyncStorage from "@react-native-async-storage/async-storage";

const USER_PROFILE_KEY = "userProfile";

export type UserProfile = {
  name: string;
  sex: "Masculino" | "Femenino";
  region: string;
  city: string;
  email: string;
};

export async function saveUserProfile(profile: UserProfile): Promise<void> {
  await AsyncStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile));
}

export async function getUserProfile(): Promise<UserProfile | null> {
  const raw = await AsyncStorage.getItem(USER_PROFILE_KEY);
  if (!raw) return null;
  return JSON.parse(raw) as UserProfile;
}

export async function clearUserProfile(): Promise<void> {
  await AsyncStorage.removeItem(USER_PROFILE_KEY);
}
