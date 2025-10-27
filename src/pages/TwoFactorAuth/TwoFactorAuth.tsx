import React, { useState, useEffect } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { style as twoFactorStyle } from "./TwoFactorAuthStyle";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../routes";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../../styles/GlobalStyles";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/Button";

export default function TwoFactorAuth() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [code, setCode] = useState("");
  const [countdown, setCountdown] = useState(180); // 3 minutos para expirar código
  const [resendCountdown, setResendCountdown] = useState(60); // 1 minuto para poder reenviar
  const [canResend, setCanResend] = useState(false);

  // Timer para expiração do código
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // Timer para habilitar o botão de reenviar
  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(
        () => setResendCountdown(resendCountdown - 1),
        1000
      );
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendCountdown]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleVerifyCode = () => {
    console.log("Verificar código 2FA:", code);
    // Lógica para verificar código de 2FA
    // Após verificação bem-sucedida, navegar para a página principal
    // navigation.navigate("Home");
    console.log("Código verificado! Acesso concedido.");
  };

  const handleResendCode = () => {
    if (canResend) {
      console.log("Reenviar código 2FA");
      // Lógica para reenviar código
      setCountdown(180); // Reinicia o contador de expiração
      setResendCountdown(60); // Reinicia o contador de reenvio
      setCanResend(false);
      setCode(""); // Limpa o código
    }
  };

  const handleBackToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView
      style={twoFactorStyle.scrollView}
      contentContainerStyle={twoFactorStyle.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={twoFactorStyle.container}>
        <Pressable
          style={twoFactorStyle.backButton}
          onPress={handleBackToLogin}
        >
          <MaterialIcons name="arrow-back" size={24} color={Colors.primary} />
        </Pressable>

        <View style={twoFactorStyle.header}>
          <View style={twoFactorStyle.iconContainer}>
            <MaterialIcons name="security" size={64} color={Colors.primary} />
          </View>
          <Text style={twoFactorStyle.title}>Autenticação de 2 Fatores</Text>
          <Text style={twoFactorStyle.subtitle}>
            Digite o código de 6 dígitos que enviamos para seu email para
            completar o login com segurança.
          </Text>
        </View>

        <View style={twoFactorStyle.emailInfoContainer}>
          <MaterialIcons name="email" size={20} color={Colors.primary} />
          <Text style={twoFactorStyle.emailInfoText}>
            Código enviado para: u***@email.com
          </Text>
        </View>

        <View style={twoFactorStyle.formContainer}>
          <Text style={twoFactorStyle.label}>Código de verificação</Text>
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

        <View style={twoFactorStyle.timerContainer}>
          <MaterialIcons
            name={countdown > 0 ? "timer" : "timer-off"}
            size={16}
            color={countdown > 0 ? Colors.primary : Colors.error}
          />
          <Text
            style={[
              twoFactorStyle.timerText,
              countdown === 0 && twoFactorStyle.timerExpired,
            ]}
          >
            {countdown > 0
              ? `O código expira em ${formatTime(countdown)}`
              : "Código expirado"}
          </Text>
        </View>

        <View style={twoFactorStyle.buttonContainer}>
          <CustomButton
            title="Verificar e Entrar"
            onPress={handleVerifyCode}
            variant="primary"
            width="100%"
            disabled={code.length !== 6}
          />
        </View>

        <View style={twoFactorStyle.linkContainer}>
          <Text style={twoFactorStyle.linkText}>Não recebeu o código? </Text>
          <Pressable onPress={handleResendCode} disabled={!canResend}>
            <Text
              style={[
                twoFactorStyle.link,
                !canResend && twoFactorStyle.linkDisabled,
              ]}
            >
              {canResend
                ? "Reenviar"
                : `Aguarde ${formatTime(resendCountdown)}`}
            </Text>
          </Pressable>
        </View>

        <View style={twoFactorStyle.securityInfoContainer}>
          <MaterialIcons name="shield" size={16} color={Colors.success} />
          <Text style={twoFactorStyle.securityInfoText}>
            A autenticação de 2 fatores adiciona uma camada extra de segurança à
            sua conta.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
