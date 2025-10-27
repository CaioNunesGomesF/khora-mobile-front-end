import React, { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { style as resetStyle } from "./ForgotPasswordStyle";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../routes";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../../styles/GlobalStyles";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/Button";

export default function ForgotPassword() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState("");

  const handleSendCode = () => {
    console.log("Enviar código para:", email);
    // Lógica para enviar código de reset
    navigation.navigate("VerifyCode");
  };

  const handleBackToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView
      style={resetStyle.scrollView}
      contentContainerStyle={resetStyle.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={resetStyle.container}>
        <Pressable style={resetStyle.backButton} onPress={handleBackToLogin}>
          <MaterialIcons name="arrow-back" size={24} color={Colors.primary} />
        </Pressable>

        <View style={resetStyle.header}>
          <View style={resetStyle.iconContainer}>
            <MaterialIcons name="lock-reset" size={64} color={Colors.primary} />
          </View>
          <Text style={resetStyle.title}>Esqueceu a senha?</Text>
          <Text style={resetStyle.subtitle}>
            Não se preocupe! Digite seu email e enviaremos um código para
            redefinir sua senha.
          </Text>
        </View>

        <View style={resetStyle.formContainer}>
          <Text style={resetStyle.label}>Email</Text>
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
        </View>

        <View style={resetStyle.buttonContainer}>
          <CustomButton
            title="Enviar código"
            onPress={handleSendCode}
            variant="primary"
            width="100%"
          />
        </View>

        <View style={resetStyle.linkContainer}>
          <Text style={resetStyle.linkText}>Lembrou a senha? </Text>
          <Pressable onPress={handleBackToLogin}>
            <Text style={resetStyle.link}>Voltar ao login</Text>
          </Pressable>
        </View>

        <View style={resetStyle.infoContainer}>
          <MaterialIcons name="info" size={16} color={Colors.textSecondary} />
          <Text style={resetStyle.infoText}>
            O código será enviado para o email cadastrado e expira em 5 minutos.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
