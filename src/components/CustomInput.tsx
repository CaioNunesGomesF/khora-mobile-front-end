import React from 'react';
import { TextInput, StyleSheet, Platform, DimensionValue, TextStyle, ViewStyle, TextInputProps } from 'react-native';

// Define as propriedades do componente, estendendo as props nativas do TextInput
interface CustomInputProps extends TextInputProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  textColor?: string;
  backgroundColor?: string;
  width?: DimensionValue;
  height?: DimensionValue;
}

const CustomInput = ({
  placeholder = 'Digite aqui...',
  value,
  onChangeText,
  textColor = '#000',
  backgroundColor = '#fff', // Cor de fundo é ESSENCIAL para a sombra no Android
  width = '80%',
  height = 60,
  ...rest // Captura todas as outras props do TextInput (keyboardType, secureTextEntry, etc.)
}: CustomInputProps) => {
  return (
    <TextInput
      style={[
        styles.input,
        { backgroundColor, width, height, color: textColor },
        styles.inputText, 
      ]}
      placeholder={placeholder}
      placeholderTextColor="#A9A9A9" // Cor do placeholder
      value={value}
      onChangeText={onChangeText}
      {...rest}
    />
  );
};

// Define os estilos
const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    paddingHorizontal: 15,
    borderWidth: 0, // Borda desativada
    
    // Configurações de Sombra (AUMENTADAS para garantir a visibilidade)
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 }, // Aumenta a distância da sombra
        shadowOpacity: 0.3, // Aumenta a escuridão da sombra
        shadowRadius: 8, // Aumenta o espalhamento (suavidade) da sombra
      },
      android: {
        elevation: 6, // Aumenta a elevação para simular a sombra no Android
      },
    }),
  } as ViewStyle,

  inputText: {
    fontSize: 16,
    fontWeight: '400',
  } as TextStyle,
});

export default CustomInput;