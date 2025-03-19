import { ReactNode } from "react";
import { GestureResponderEvent, TextStyle, ViewStyle } from "react-native";
import FontFamily from "@/constants/FontFamily";

export interface ButtonProps {
  title?: string;
  onPress: (event: GestureResponderEvent) => void;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  disabled?: boolean;
  btnHeight?: number;
  buttonCustomStyle?: ViewStyle;
  textCustomStyle?: TextStyle;
  fontSize?: number;
  iconSize?: number;
  prefix?: JSX.Element;
  icon?: ReactNode;
  IconName?: string;
  isLoading?: boolean;
  suffix?: JSX.Element;
  isFullWidth?: boolean;
  fontFamily?: keyof typeof FontFamily;
  showShadow?: boolean;
}
