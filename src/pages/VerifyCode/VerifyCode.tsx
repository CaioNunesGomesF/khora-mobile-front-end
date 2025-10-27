import React, { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { style as resetStyle } from "./VerifyCodeStyle";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../routes";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../../styles/GlobalStyles";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/Button";

export default function VerifyCode() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [code, setCode] = useState("");

  const handleVerifyCode = () => {
    console.log("Verificar código:", code);
    // Lógica para verificar código
    navigation.navigate("ResetPassword");
  };

  const handleResendCode = () => {
    console.log("Reenviar código");
    // Lógica para reenviar código
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
            <MaterialIcons
              name="verified-user"
              size={64}
              color={Colors.primary}
            />
          </View>
          <Text style={resetStyle.title}>Verificar código</Text>
          <Text style={resetStyle.subtitle}>
            Digite o código de 6 dígitos que enviamos para seu email.
          </Text>
        </View>

        <View style={resetStyle.formContainer}>
          <Text style={resetStyle.label}>Código de verificação</Text>
          <CustomInput
            placeholder="000000"
            value={code}
            onChangeText={setCode}
            keyboardType="number-pad"
            maxLength={6}
            accessibilityLabel="Digite o código de verificação"
            width="100%"
            iconName="pin"
          />
        </View>

        <View style={resetStyle.buttonContainer}>
          <CustomButton
            title="Verificar código"
            onPress={handleVerifyCode}
            variant="primary"
            width="100%"
          />
        </View>

        <View style={resetStyle.linkContainer}>
          <Text style={resetStyle.linkText}>Não recebeu o código? </Text>
          <Pressable onPress={handleResendCode}>
            <Text style={resetStyle.link}>Reenviar</Text>
          </Pressable>
        </View>

        <View style={resetStyle.infoContainer}>
          <MaterialIcons name="timer" size={16} color={Colors.textSecondary} />
          <Text style={resetStyle.infoText}>
            O código expira em 5 minutos. Verifique sua caixa de spam se não
            encontrar.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
