import React, { useState } from 'react'; // << IMPORTANTE: Importe o useState
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { style as loginStyle } from '../styles/RegisterStyle';
// import { style as globalStyle } from '../styles/GlobalStyles'; // << Não é mais necessário se o CustomInput for auto-estilizado
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../routes';
// import Button from '../components/Button'; // Pode remover esta linha se for a mesma da de baixo
import CustomButton from '../components/Button';

import CustomInput from '../components/CustomInput'; // << 1. IMPORTAÇÃO DO NOVO COMPONENTE

export default function Login() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // << 2. ESTADOS PARA CONTROLAR OS VALORES DO INPUT
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Login button pressed");
    console.log("Email:", email);     // << Valores prontos para uso!
    console.log("Password:", password);
  };

  return (
    <View style={loginStyle.container}>
      {/* 1. BOX TOP (Header) */}
      {/* ... (código inalterado) */}
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

          {/* << 3. SUBSTITUIÇÃO PELO CUSTOMINPUT DE EMAIL */}
          <CustomInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            accessibilityLabel="Digite seu email"
            width="100%" // Garante que ocupe o espaço do boxInputs
          />
          
          {/* << 3. SUBSTITUIÇÃO PELO CUSTOMINPUT DE SENHA */}
          <CustomInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            accessibilityLabel="Digite sua senha"
            width="100%" // Garante que ocupe o espaço do boxInputs
          />
        </View>

        {/* Link: Forgot password */}
        {/* ... (código inalterado) */}
        <Pressable
          style={loginStyle.forgotPassword}
          onPress={() => console.log("Forgot Password pressed")}
        >
          <Text style={loginStyle.forgotPasswordText}>
            Forgot your password?
          </Text>
        </Pressable>
      </View>

      {/* 3. BOX BOTTOM (Botão de Login) */}
      {/* ... (código inalterado) */}
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
      {/* ... (código inalterado) */}
      <View style={loginStyle.boxFlashLinks}>
        <Pressable onPress={() => console.log("Entrar sem conta")}>
          <Text style={loginStyle.boxFlashLinksOne}>Entre sem uma conta</Text>
        </Pressable>
        <Pressable onPress={() => console.log("Criar nova conta")}>
          <Text style={loginStyle.boxFlashLinksTwo}>Criar nova conta</Text>
        </Pressable>
      </View>
    </View>
  );
}