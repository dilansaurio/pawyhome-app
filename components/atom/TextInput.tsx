import { TextInput } from "react-native";
import { Text } from "../Themed";

type TextInputComponentProps = {
  titleInput: string;
  placeholder?: string;
};

export default function TextInputComponent({
  titleInput,
  placeholder,
}: TextInputComponentProps) {
  return (
    <>
      <Text className="text-sm">{titleInput}</Text>
      <TextInput
        placeholder={placeholder}
        className="w-full h-12 px-4 py-2 bg-gray-200 rounded-lg"
      />
    </>
  );
}
