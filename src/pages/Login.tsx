import React from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { style as loginStyle } from '../styles/LoginStyle';
import { style as globalStyle } from '../styles/GlobalStyles';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../routes';
import Button from '../components/Button';
import CustomButton from '../components/Button';


export default function Login() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    // lógica de login futura
    console.log("Login button pressed");
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
          <TextInput
            placeholder="Emai"
            placeholderTextColor="#999"
            style={globalStyle.input}
            accessibilityLabel="Digite seu email"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#999"
            style={globalStyle.input}
            secureTextEntry
            accessibilityLabel="Digite sua senha"
          />
        </View>

        {/* Link: Forgot password */}
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
