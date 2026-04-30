import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
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
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "padding"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        <ScrollView
          className={`flex-1 ${className ?? ""}`}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
      {footer}
    </SafeAreaView>
  );
}
