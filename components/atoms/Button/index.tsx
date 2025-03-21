import {
  ActivityIndicator,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import GLOBAL_STYLES from "@/constants/GlobalStyles";
import { COLORS } from "@/constants/Colors";
import getShadowStyle from "@/utils/getShadowStyle";
import { ButtonProps } from "./types";
import Text from "@/components/atoms/Text";
import styles from "./styles";
import { theme } from "@/utils/getTheme";

export default function Button({
  title,
  onPress,
  color,
  backgroundColor = COLORS[theme].primary,
  borderColor,
  disabled = false,
  btnHeight = 40,
  buttonCustomStyle,
  textCustomStyle,
  fontSize = 16,
  prefix,
  icon,
  isLoading,
  suffix,
  isFullWidth = false,
  fontFamily = "font500",
  showShadow = false,
  variant = "filled",
}: ButtonProps) {
  const customStyle: ViewStyle = {
    height: btnHeight,
    flex: isFullWidth ? 1 : undefined,
    ...buttonCustomStyle,
  };

  const textExtraStyle = {
    color:
      variant === "filled"
        ? color || COLORS.light.white
        : color || COLORS.light.primary,
    fontSize,
    fontFamily,
  };

  const hasTitle = !!title;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[variant],
        customStyle,
        showShadow && getShadowStyle(),
        variant === "outlined" && {
          borderColor: borderColor || backgroundColor,
        },
        variant === "underlined" && {
          borderBottomColor: borderColor || backgroundColor,
        },
      ]}
      disabled={disabled || isLoading}
      activeOpacity={disabled ? 1 : 0.2}
      onPress={onPress}
    >
      {!isLoading ? (
        <View style={GLOBAL_STYLES.row}>
          {prefix && <View style={styles.prefixSpacing}>{prefix}</View>}
          {icon && <View style={styles.prefixSpacing}></View>}

          {hasTitle && (
            <Text style={[styles.text, textExtraStyle, textCustomStyle]}>
              {title}
            </Text>
          )}

          {suffix && <View style={styles.suffixSpacing}>{suffix}</View>}
        </View>
      ) : (
        <ActivityIndicator color={color} size={24} />
      )}
    </TouchableOpacity>
  );
}
