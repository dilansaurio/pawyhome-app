import ScreenLayout from "@/components/template/screenlayout";
import ProfileBody from "../screen/profilescreen/ProfileBody";
import ProfileHeader from "../screen/profilescreen/ProfileHeader";

export default function ProfileScreen() {
  return (
    <ScreenLayout className="bg-[#F5F9FC]">
      {/* icon - name - location */}
      <ProfileHeader name="Alejandro Martinez" location="Coquimbo, Chile" />
      {/* list of sections */}
      <ProfileBody />
    </ScreenLayout>
  );
}
