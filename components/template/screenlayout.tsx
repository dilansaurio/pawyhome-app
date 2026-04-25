import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ScreenLayoutProps = {
  children: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
};

export default function ScreenLayout({
  children,
  className,
  footer,
}: ScreenLayoutProps) {
  return (
    <SafeAreaView
      className={`flex-1 bg-white ${className ?? ""}`}
      edges={["left", "right", "bottom"]}
    >
      <ScrollView
        className={`flex-1 ${className ?? ""}`}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {children}
      </ScrollView>
      {footer}
    </SafeAreaView>
  );
}
