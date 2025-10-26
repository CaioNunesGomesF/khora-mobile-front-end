import React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  PressableProps,
  DimensionValue,
  View,
} from "react-native";
import {
  Colors,
  BorderRadius,
  FontSizes,
  FontWeights,
  Spacing,
} from "../styles/GlobalStyles";

type ButtonVariant = "primary" | "secondary";

interface CustomButtonProps extends Omit<PressableProps, "style"> {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  width?: DimensionValue;
  disabled?: boolean;
  icon?: React.ReactNode; 
}

export default function CustomButton({
  title,
  onPress,
  variant = "primary",
  width = "100%",
  disabled = false,
  icon,
  ...rest
}: CustomButtonProps) {
  const buttonStyle: ViewStyle = {
    ...styles.baseButton,
    ...(variant === "primary" ? styles.buttonPrimary : styles.buttonSecondary),
    width,
    opacity: disabled ? 0.5 : 1,
  };

  const textStyle: TextStyle = {
    ...styles.baseText,
    ...(variant === "primary" ? styles.textPrimary : styles.textSecondary),
  };

  return (
    <Pressable
      style={({ pressed }) => [buttonStyle, pressed && styles.pressed]}
      onPress={onPress}
      disabled={disabled}
      {...rest}
    >
      <View style={styles.buttonContent}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <Text style={textStyle}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  baseButton: {
    display: "flex",
    borderRadius: BorderRadius.lg,
    paddingVertical: 17,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    marginRight: Spacing.sm,
  },

  buttonPrimary: {
    backgroundColor: Colors.primary,
  },

  buttonSecondary: {
    backgroundColor: Colors.primary10,
  },

  baseText: {
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.bold,
    textAlign: "center",
  },

  textPrimary: {
    color: Colors.textWhite,
  },

  textSecondary: {
    color: Colors.primary,
  },

  pressed: {
    opacity: 0.7,
  },
});
