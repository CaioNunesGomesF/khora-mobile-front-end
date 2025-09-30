import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40, // Padding vertical para evitar que os elementos toquem nas bordas da tela
    
    // AQUI: Define 35 unidades de espaço entre os filhos diretos (boxTop, boxMid, boxBottom, boxFlashLinks)
    gap: 30, 
  },

  // --- Box Top (Header) ---
  boxTop: {
    width: "80%",
    alignItems: "center",
    // marginBottom removido, pois o 'gap' do container está sendo usado
    gap: 30,
  },

  boxTopTextOne: {
    color: "#1F41BB",
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 20,
  },

  boxTopTextTwo: {
    color: "#1F41BB",
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 16,
  },

  boxTopTextThree: {
    color: "black",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 16,
    width: '50%',
    textAlign: 'center',
  },

  // --- Box Mid (Inputs + Forgot Password) ---
  boxMid: {
    width: "80%",
    gap: 30,
    // marginBottom removido, pois o 'gap' do container está sendo usado
  },

  boxInputs: {
    width: "100%",
    alignItems: "center",
    gap: 30,
  },

  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: 6,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "#1F41BB",
    fontWeight: "500",
  },

  // --- Box Bottom (Button) ---
  boxBottom: {
    width: "100%",
    alignItems: "center",
    gap: 30,
    marginBottom: '3%'
    // marginBottom removido, pois o 'gap' do container está sendo usado
  },

  // --- Flash Links (Inferiores) ---
  boxFlashLinks: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 0, // Definido como 0 para não acumular espaço com o 'gap' do container
  },
  boxFlashLinksOne: {
    textAlign: "left",
    color: "#000000ff",
    fontWeight: "600",
  },
  boxFlashLinksTwo: {
    textAlign: "right",
    color: "#000000ff",
    fontWeight: "600",
  },
});