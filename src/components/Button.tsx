// /home/linux-caion/Área de trabalho/khora-mobile-front-end/src/components/Button.tsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform, ViewStyle, TextStyle, DimensionValue } from 'react-native';

interface CustomButtonProps {
  title: string;
  textColor?: string;
  backgroundColor?: string;
  width?: DimensionValue;
  height?: DimensionValue;
  onPress: () => void;
}

const CustomButton = ({
  title,
  textColor = '#fff',
  backgroundColor = '#1F41BB',
  width = '80%',
  height = 50,
  onPress,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor, width, height }]}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',

    // Sombra iOS (Corrigida para garantir visibilidade)
    ...Platform.select({
      ios: {
        shadowColor: '#000', // << Cor da sombra definida como preta
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  } as ViewStyle,
  text: {
    fontSize: 18,
    fontWeight: '600',
  } as TextStyle,
});

export default CustomButton;