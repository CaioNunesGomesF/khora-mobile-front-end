import React, { useRef } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
  Animated,
} from 'react-native';

interface CustomInputProps {
  Text?: string;
  TextColor?: string;
  TextSize?: number;
  onPress: () => void;
}

const CustomTextLinkButton = ({
  Text: title = 'Clique Aqui',
  TextColor = '#1F41BB',
  TextSize = 18,
  onPress,
}: CustomInputProps) => {
  // 1. Cria a referência para o valor da animação de escala (começa em 1)
  const scaleAnim = useRef(new Animated.Value(1)).current;

  // Função para pressionar: INICIA o aumento de escala
  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 1.05, // Aumenta o texto em 5% (Fica maior)
      useNativeDriver: true,
      friction: 5,
      tension: 100,
    }).start();
  };

  // Função para soltar: RETORNA à escala original e chama a ação
  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1, // Volta ao tamanho original (Fica menor)
      useNativeDriver: true,
      friction: 5,
      tension: 100,
    }).start(() => {
      // Chama a função de clique original APENAS depois que a animação de retorno terminar
      onPress();
    });
  };

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1} // Desativa a opacidade padrão
      style={styles.container}
    >
      {/* 2. Envolve o componente Text com um Animated.Text */}
      <Animated.Text
        style={[
          styles.text,
          {
            color: TextColor,
            fontSize: TextSize,
            // 3. Aplicamos a transformação de escala
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        {title}
      </Animated.Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignSelf: 'flex-start', // Importante para que a animação funcione corretamente
  },
  text: {
    fontWeight: '600',
  } as TextStyle,
});

export default CustomTextLinkButton;