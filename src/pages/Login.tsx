import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { style as loginStyle } from '../styles/LoginStyle';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../routes';

import CustomButton from '../components/Button';
import CustomInput from '../components/CustomInput';
// VAI IMPORTAR O NOVO COMPONENTE DE LINK/TEXTO
import CustomTextLinkButton from '../components/FlashLinks'; // << NOVA IMPORTAÇÃO

export default function Login() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Login button pressed");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={loginStyle.container}>
      {/* 1. BOX TOP (Header) */}
      <View style={loginStyle.boxTop}>
        <Text style={loginStyle.boxTopTextOne}>KHORA</Text>
        <Text style={loginStyle.boxTopTextTwo}>Login Here</Text>
        <Text style={loginStyle.boxTopTextThree}>
          Welcome back, you've been missed!
        </Text>
      </View>

      {/* 2. BOX MID (Inputs) */}
      <View style={loginStyle.boxMid}>
        <View style={loginStyle.boxInputs}>

          {/* INPUTS (INALTERADOS) */}
          <CustomInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            accessibilityLabel="Digite seu email"
            width="100%"
          />
          <CustomInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            accessibilityLabel="Digite sua senha"
            width="100%"
          />
        </View>

        {/* 🚀 SUBSTITUIÇÃO 1: Link "Forgot password" */}
        <View style={loginStyle.forgotPassword}>
          <CustomTextLinkButton
            Text="Forgot your password?"
            TextColor="#1F41BB" // Usando a cor do tema para o link (pode ajustar)
            TextSize={14} // Tamanho menor para links secundários (pode ajustar)
            onPress={() => console.log("Forgot Password pressed (Pulinho!)")}
          />
        </View>
      </View>

      {/* 3. BOX BOTTOM (Botão de Login) */}
      <View style={loginStyle.boxBottom}>
        <View style={loginStyle.boxBottom}>
          <CustomButton
            title="Login"
            textColor="#fff"
            backgroundColor="#1F41BB"
            width="80%"
            height={60}
            onPress={handleLogin}
          />
        </View>
      </View>

      {/* 4. BOX FLASH LINKS */}
      <View style={loginStyle.boxFlashLinks}>
        {/* 🚀 SUBSTITUIÇÃO 2: Link "Entre sem uma conta" */}
        <CustomTextLinkButton
          Text="Entre sem uma conta"
          TextColor="#000000"
          TextSize={16}
          onPress={() => console.log("Entrar sem conta (Pulinho!)")}
        />

        {/* 🚀 SUBSTITUIÇÃO 3: Link "Criar nova conta" */}
        <CustomTextLinkButton
          Text="Criar nova conta"
          TextColor="#000000"
          TextSize={16}
          onPress={() => console.log("Criar nova conta (Pulinho!)")}
        />
      </View>
    </View>
  );
}