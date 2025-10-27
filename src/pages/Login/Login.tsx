import React, { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { style as loginStyle } from "./LoginStyle";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../routes";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../styles/GlobalStyles";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/Button";

export default function Login() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login com email/senha");
    // lógica de login
    // Se o usuário tiver 2FA habilitado, navegar para a página de 2FA
    // Caso contrário, fazer login direto

    // Simulação: verificar se 2FA está habilitado
    const has2FAEnabled = true; // Isso viria do backend após validar email/senha

    if (has2FAEnabled) {
      // Enviar código 2FA para o email do usuário
      console.log("2FA habilitado - enviando código para o email");
      navigation.navigate("TwoFactorAuth");
    } else {
      // Login direto sem 2FA
      console.log("Login bem-sucedido sem 2FA");
      // navigation.navigate("Home");
    }
  };

  const handleGoogleLogin = () => {
    console.log("Login com Google");
    // lógica de login com Google
  };

  const handleSignUp = () => {
    navigation.navigate("Register");
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <ScrollView
      style={loginStyle.scrollView}
      contentContainerStyle={loginStyle.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={loginStyle.container}>
        <View style={loginStyle.header}>
          <Text style={loginStyle.title}>Bem-vindo ao Khora</Text>
          <Text style={loginStyle.subtitle}>
            Entre para continuar sua jornada
          </Text>
        </View>

        <View style={loginStyle.formContainer}>
          <Text style={loginStyle.label}>Email</Text>
          <CustomInput
            placeholder="khora@email.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            accessibilityLabel="Digite seu email"
            width="100%"
            iconName="email"
          />

          <View style={loginStyle.passwordLabelContainer}>
            <Text style={loginStyle.label}>Senha</Text>
            <Pressable
              style={loginStyle.forgotPasswordButton}
              onPress={handleForgotPassword}
            >
              <Text style={loginStyle.forgotPasswordText}>
                Esqueceu a senha?
              </Text>
            </Pressable>
          </View>

          <CustomInput
            placeholder="********"
            value={password}
            onChangeText={setPassword}
            accessibilityLabel="Digite sua senha"
            width="100%"
            iconName="lock"
            isPassword={true}
          />
        </View>

        <View style={loginStyle.buttonContainer}>
          <CustomButton
            title="Entrar"
            onPress={handleLogin}
            variant="primary"
            width="100%"
          />
          <CustomButton
            title="Entrar com Google"
            onPress={handleGoogleLogin}
            variant="secondary"
            width="100%"
            icon={
              <FontAwesome name="google" size={20} color={Colors.primary} />
            }
          />
        </View>

        <View style={loginStyle.dividerContainer}>
          <View style={loginStyle.divider} />
          <Text style={loginStyle.dividerText}>ou</Text>
          <View style={loginStyle.divider} />
        </View>

        <View style={loginStyle.signUpContainer}>
          <Text style={loginStyle.signUpText}>Não tem uma conta? </Text>
          <Pressable onPress={handleSignUp}>
            <Text style={loginStyle.signUpLink}>Cadastre-se</Text>
          </Pressable>
        </View>

        <View style={loginStyle.privacyContainer}>
          <MaterialIcons name="lock" size={16} color={Colors.textPrimary} />
          <Text style={loginStyle.privacyText}>
            Seus dados estão seguros e protegidos
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
