// /home/linux-caion/Área de trabalho/khora-mobile-front-end/src/components/Button.tsx

import React, { useRef } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  ViewStyle,
  TextStyle,
  DimensionValue,
  Animated, // Importamos o Animated
} from 'react-native';

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
  // 1. Cria uma referência para o valor da animação de escala
  const scaleAnim = useRef(new Animated.Value(1)).current;

  // Função para iniciar a animação de "pulinho"
  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95, // Diminui o botão para 95% do seu tamanho (o "pulinho" para baixo)
      useNativeDriver: true,
      friction: 5, // Ajusta o quão rápido ele volta, simulando a elasticidade
      tension: 100,
    }).start();
  };

  // Função para reverter a animação e chamar a função onPress
  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1, // Retorna o botão ao seu tamanho original (o "pulinho" para cima)
      useNativeDriver: true,
      friction: 5,
      tension: 100,
    }).start(() => {
      // Chama a função de clique original APENAS depois que a animação de retorno terminar
      onPress();
    });
  };

  return (
    // 2. Usamos o Animated.View para aplicar a transformação
    <Animated.View
      style={[
        styles.animatedContainer,
        { transform: [{ scale: scaleAnim }], width }, // Aplicamos a escala e garantimos que a largura seja mantida
      ]}
    >
      <TouchableOpacity
        // 3. Substituímos o onPress por onLongPress, onPressIn e onPressOut para maior controle da animação
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        // NOTE: Removemos o 'onPress' e o chamamos dentro de 'handlePressOut'
        style={[styles.button, { backgroundColor, height }]}
        activeOpacity={1} // Desabilitamos o activeOpacity padrão do TouchableOpacity
      >
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  animatedContainer: {
    // Certifica-se que o container se comporta bem com a largura e alinhamento
    alignSelf: 'center', 
  },
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