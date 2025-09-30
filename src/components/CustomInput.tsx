import React, { useState, useRef } from 'react';
import {
  TextInput,
  StyleSheet,
  Platform,
  DimensionValue,
  TextStyle,
  ViewStyle,
  TextInputProps,
  Animated, // Importamos o Animated
} from 'react-native';

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
  backgroundColor = '#fff',
  width = '80%',
  height = 60,
  ...rest // Captura todas as outras props do TextInput (keyboardType, secureTextEntry, etc.)
}: CustomInputProps) => {
  // 1. Cria uma referência para o valor da animação de escala (começa em 1)
  const scaleAnim = useRef(new Animated.Value(1)).current;

  // 2. Função para FOCAR (aumentar o tamanho)
  const handleFocus = () => {
    Animated.spring(scaleAnim, {
      toValue: 1.03, // Aumenta o input em 3% (o "pulinho" de foco)
      useNativeDriver: true,
      friction: 8,
      tension: 40,
    }).start();
  };

  // 3. Função para DESFOCAR (voltar ao tamanho normal)
  const handleBlur = () => {
    Animated.spring(scaleAnim, {
      toValue: 1, // Volta ao tamanho original
      useNativeDriver: true,
      friction: 8,
      tension: 40,
    }).start();
  };

  return (
    // 4. Envolve o TextInput com um Animated.View para aplicar a transformação
    <Animated.View
      style={[
        styles.animatedContainer,
        { transform: [{ scale: scaleAnim }], width }, // Aplica a escala e a largura
      ]}
    >
      <TextInput
        style={[
          styles.input,
          { backgroundColor, height, color: textColor },
          styles.inputText,
        ]}
        placeholder={placeholder}
        placeholderTextColor="#A9A9A9"
        value={value}
        onChangeText={onChangeText}
        // 5. Adiciona os manipuladores de evento de foco e desfoque
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
    </Animated.View>
  );
};

// Define os estilos
const styles = StyleSheet.create({
  animatedContainer: {
    // Garante que o container se alinhe ao centro se a largura for menor que 100%
    alignSelf: 'center',
  },

  input: {
    borderRadius: 10,
    paddingHorizontal: 15,
    borderWidth: 0,

    // ...Configurações de Sombra (MANTIDAS)
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
    }),
  } as ViewStyle,

  inputText: {
    fontSize: 16,
    fontWeight: '400',
  } as TextStyle,
});

export default CustomInput;
