// Importando React e os componentes básicos do React Native
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

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

  // Estrutura principal da tela
  return (
    // Container master que segura tudo dentro ✨
    <View style={style.container}>

      {/* Topo da tela, onde a magia da imagem acontece 🏔️ */}
      <View style={style.boxTop}>
        {/* Imagem central de boas-vindas, tipo tapete vermelho 🎬 */}
        <Image source={imagemWelcome} style={style.imagemCentral} />
      </View>

      {/* Meio da tela, onde o papo saudável rola 🥦 */}
      <View style={style.boxMid}>
        {/* Mensagem motivadora de herói 💪 */}
        <Text style={style.TextTop}>Sua saúde em primeiro lugar</Text>
        {/* Texto explicativo, tipo guia do mestre Jedi 📜 */}
        <Text style={style.TextBottom}>
          Explore todos os recursos de saúde pensados para você e suas necessidades.
        </Text>
      </View>

      {/* Parte de baixo da tela, lar dos botões mágicos 🧙‍♂️ */}
      <View style={style.boxBotton}>
        <View style={style.buttons}>
          {/* Botão de Login: teletransporte instantâneo para Login ⚡ */}
          <TouchableOpacity
            style={style.loginButton}
            onPress={() => navigation.navigate('Login')}
          >
            {/* Texto do botão, portal para o universo 🛸 */}
            <Text style={style.loginButtonText}>Login</Text>
          </TouchableOpacity>

          {/* Botão de Register ainda em construção 🔒 */}
          <TouchableOpacity
            style={style.registerButton}
            onPress={() => console.log('Botão Register pressionado!')}
          >
            {/* Texto do botão, para futuros aventureiros 🧩 */}
            <Text style={style.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}
