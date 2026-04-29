/*
 * This file contains TypeScript type definitions for components used in the PawyHome app.
 */

import { StyleProp, TextStyle, ViewStyle } from "react-native";

// Dropdown component
export type DropdownOption = {
  label: string;
  value: string;
};

export type DropdownProps = {
  label?: string;
  placeholder?: string;
  options: DropdownOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, option: DropdownOption) => void;
  disabled?: boolean;
  helperText?: string;
  errorText?: string;
};

//  UploadImage component
export type UploadImageProps = {
  maxPhotos?: number;
  onChange?: (images: (string | null)[]) => void;
};

// ButtonList component
export type ButtonListProps = {
  items: {
    id: string;
    title: string;
    iconName?: any;
    onPress?: () => void;
  }[];
};

// SelectOptions component
export type SelectOptions = {
  id: string;
  title: string;
  value: string;
};

export type SelectOptionsProps = {
  options: SelectOptions[];
  selectedIds: string[];
  numColumns?: number;
  onToggle: (id: string) => void;
  editing?: boolean;
};

// SelectOptions component
export type SelectOptions = {
  id: string;
  title: string;
  value: string;
};

export type SelectOptionsProps = {
  options: SelectOptions[];
  selectedIds: string[];
  onToggle: (id: string) => void;
  editing?: boolean;
};

// ButtonSections component
export type ButtonSectionsProps = {
  items: {
    id: string;
    title: string;
    iconName?: string;
  }[];
  numColumns?: number;
  onPress?: (item: { id: string; title: string; iconName?: string }) => void;
  selectedId?: string;
  containerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  selectedButtonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  selectedTextStyle?: StyleProp<TextStyle>;
  showIcon?: boolean;
  iconColor?: string;
  iconSize?: number;
};

// Card component
export type CardProps = {
  title?: string;
  description?: string;
  button?: boolean;
  backgroundColor?: string;
  source: any;
  onPress: () => void;
};
