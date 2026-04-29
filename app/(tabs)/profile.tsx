import ScreenLayout from "@/components/template/screenlayout";
import { getUserProfile, UserProfile } from "@/hooks/useUserProfile";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import ProfileBody from "../screen/profilescreen/ProfileBody";
import ProfileHeader from "../screen/profilescreen/ProfileHeader";

export default function ProfileScreen() {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useFocusEffect(
    useCallback(() => {
      getUserProfile().then(setProfile);
    }, []),
  );

  const name = profile?.name ?? "Sin nombre";
  const location = profile
    ? `${profile.city}, ${profile.region}`
    : "Sin ubicación";

  return (
    <ScreenLayout className="bg-[#F5F9FC]">
      {/* icon - name - location */}
      <ProfileHeader name={name} location={location} />
      {/* list of sections */}
      <ProfileBody />
    </ScreenLayout>
  );
}
