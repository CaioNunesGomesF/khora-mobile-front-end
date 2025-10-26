import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { style as welcomeStyle } from "./WelcomeStyle";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../routes";
import LogoKhora from "../../assets/logoKhora.svg";
import CustomButton from "../../components/Button";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../../styles/GlobalStyles";

export default function Welcome() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleAnonymous = () => {
    console.log("Navegar para exploração anônima");
  };

  return (
    <View style={welcomeStyle.container}>
      <View style={welcomeStyle.textContainer}>
        <View style={welcomeStyle.logoContainer}>
          <LogoKhora width={150} height={150} />
          <Text style={welcomeStyle.logoText}>Khora</Text>
        </View>

        <Text style={welcomeStyle.subtitle}>
          Seu espaço para cuidar de você.
        </Text>
        <Text style={welcomeStyle.description}>
          Explore, aprenda e cuide da sua saúde de forma anônima e segura. Sem
          tabus, sem julgamentos.
        </Text>
      </View>

      <View style={welcomeStyle.buttonsContainer}>
        <CustomButton
          title="Explorar Anonimamente"
          onPress={handleAnonymous}
          variant="primary"
        />

        <CustomButton
          title="Criar Conta ou Entrar"
          onPress={handleLogin}
          variant="secondary"
        />

        <View style={welcomeStyle.privacyContainer}>
          <MaterialIcons name="check-circle" size={24} color={Colors.success} />
          <Text style={welcomeStyle.privacyText}>
            Sua privacidade é garantida
          </Text>
        </View>
      </View>
    </View>
  );
}
