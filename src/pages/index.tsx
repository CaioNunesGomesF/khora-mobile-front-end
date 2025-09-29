// Importando React e os componentes básicos do React Native
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'; // Removido TouchableOpacity
import CustomButton from '../components/Button'; // << IMPORTADO!

// Imagem de boas-vindas da galáxia 🌌
import imagemWelcome from '../assets/welcome.png';

// Estilos ninja do arquivo style 🥷
import { style } from '../styles/style';

// Nossa bússola mágica para navegar entre telas 🧭
import { useNavigation } from '@react-navigation/native';

// Tipos para ajudar o TypeScript a não surtar 😎
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../routes';

// Definindo o tipo de navegação dessa tela de Welcome 🗺️
type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

// Tela principal de boas-vindas do app 🎉
export default function Welcome() {

  // Pegando a bússola para teletransporte entre telas 🔮
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  // Funções de navegação para Login
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  // Função para Register (apenas console.log por enquanto)
  const handleRegister = () => {
    console.log('Botão Register pressionado!');
  };

  // Estrutura principal da tela
  return (
    // Container master que segura tudo dentro ✨
    <View style={style.container}>

      {/* Topo da tela, onde a magia da imagem acontece 🏔️ */}
      <View style={style.boxTop}>
        <Image source={imagemWelcome} style={style.imagemCentral} />
      </View>

      {/* Meio da tela, onde o papo saudável rola 🥦 */}
      <View style={style.boxMid}>
        <Text style={style.TextTop}>Sua saúde em primeiro lugar</Text>
        <Text style={style.TextBottom}>
          Explore todos os recursos de saúde pensados para você e suas necessidades.
        </Text>
      </View>

      {/* Parte de baixo da tela, lar dos botões mágicos 🧙‍♂️ */}
      <View style={style.boxBotton}>
        {/* Este 'View' precisa de flexDirection: 'row' em style.buttons para alinhar */}
        <View style={style.buttons}>
          
          {/* Botão de Login: USANDO CUSTOMBUTTON (Primário) */}
          <CustomButton
            title="Login"
            onPress={handleLogin}
            backgroundColor="#1F41BB" // Fundo Azul
            textColor="#ffffff"      // Texto Branco
            width="48%"               // Ocupa quase metade da largura
            height={50}
          />

          {/* Botão de Register: USANDO CUSTOMBUTTON (Secundário) */}
          <CustomButton
            title="Register"
            onPress={handleRegister}
            backgroundColor="#ffffff" // Fundo Branco
            textColor="#1F41BB"       // Texto Azul
            width="48%"               // Ocupa quase metade da largura
            height={50}
          />

        </View>
      </View>

    </View>
  );
}