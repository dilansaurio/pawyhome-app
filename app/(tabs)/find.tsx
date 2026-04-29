import { SafeAreaView } from "react-native-safe-area-context";
import FindContent from "../screen/findscreen/components/FindContent";
import FindHeader from "../screen/findscreen/components/FindHeader";

export default function Find() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 16,
        gap: 12,
      }}
      edges={["left", "right"]}
    >
      <FindHeader />
      <FindContent />
    </SafeAreaView>
  );
}
