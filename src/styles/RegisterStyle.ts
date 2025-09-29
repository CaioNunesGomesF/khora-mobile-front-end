import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40, 
    // Mantém o espaçamento uniforme e responsivo
    gap: 30, 
  },

  // --- Box Top (Header) ---
  boxTop: {
    width: "80%", // Responsivo por porcentagem
    alignItems: "center",
    gap: 30,
  },

  // MANTIDO: Tamanho de fonte original e fixo
  boxTopTextOne: {
    color: "#1F41BB",
    fontSize: 32, // Revertido para valor fixo
    fontWeight: "600",
    marginBottom: 20, // Revertido para valor fixo
  },

  // MANTIDO: Tamanho de fonte original e fixo
  boxTopTextTwo: {
    color: "#1F41BB",
    fontSize: 30, // Revertido para valor fixo
    fontWeight: "800",
    marginBottom: 16, // Revertido para valor fixo
  },

  // MANTIDO: Tamanho de fonte original e fixo
  boxTopTextThree: {
    color: "black",
    fontSize: 20, // Revertido para valor fixo
    fontWeight: "800",
    marginBottom: 16, // Revertido para valor fixo
    width: '50%', // Mantido responsivo por porcentagem
    textAlign: 'center',
  },

  // --- Box Mid (Inputs + Forgot Password) ---
  boxMid: {
    width: "80%", // Responsivo por porcentagem
    gap: 30,
  },

  boxInputs: {
    width: "100%", // Responsivo por porcentagem
    alignItems: "center",
    gap: 30,
  },

  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: 6, // Revertido para valor fixo
  },
  forgotPasswordText: {
    fontSize: 14, // Revertido para valor fixo
    color: "#1F41BB",
    fontWeight: "500",
  },

  // --- Box Bottom (Button) ---
  boxBottom: {
    width: "100%", // Responsivo por porcentagem
    alignItems: "center",
    gap: 30,
    marginBottom: '5%' // Mantido responsivo por porcentagem
  },

  // --- Flash Links (Inferiores) ---
  boxFlashLinks: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%", // Responsivo por porcentagem
    marginTop: 0, 
  },
  
  // MANTIDO: Tamanho de fonte original e fixo (assumindo um tamanho base de 16px)
  boxFlashLinksOne: {
    textAlign: "left",
    color: "#000000ff",
    fontWeight: "600",
    fontSize: 16, // Usando 16 como padrão se não houver um original
  },
  boxFlashLinksTwo: {
    textAlign: "right",
    color: "#000000ff",
    fontWeight: "600",
    fontSize: 16, // Usando 16 como padrão se não houver um original
  },
});