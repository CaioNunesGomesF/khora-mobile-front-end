import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },

  // --- Box Top (Header) ---
  boxTop: {
    width: "80%",
    alignItems: "center",
    marginBottom: 35,
  },

  boxTopTextBase: {
    color: "#1F41BB",
    fontFamily: "MontserratAlternates_400Regular",
    textAlign: "center",
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
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 16,
  },

  // --- Box Mid (Inputs + Forgot Password) ---
  boxMid: {
    width: "80%",
    marginBottom: 35,
  },

  boxInputs: {
    width: "100%",
    alignItems: "center",
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
    marginBottom: "5%",
  },

  // --- Flash Links (Inferiores) ---
  boxFlashLinks: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
  boxFlashLinksOne: {
    textAlign: "left",
    color: "#1F41BB",
    fontWeight: "600",
  },
  boxFlashLinksTwo: {
    textAlign: "right",
    color: "#1F41BB",
    fontWeight: "600",
  },
});
