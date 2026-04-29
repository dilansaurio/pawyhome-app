import { ImageSourcePropType } from "react-native";

export type Slide = {
  id: string;
  image: ImageSourcePropType;
  title: string;
  description: string;
  accent: string;
};
