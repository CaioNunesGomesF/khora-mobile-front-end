import { StyleSheet } from "react-native";
import { Colors, Spacing, FontSizes, FontWeights, BorderRadius } from "../../styles/GlobalStyles";

export const style = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  scrollContent: {
    flexGrow: 1,
  },

  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xxl,
    justifyContent: "center",
  },

  // Header
  header: {
    alignItems: "center",
    marginBottom: Spacing.xl,
  },

  title: {
    fontSize: FontSizes.xxl + 4,
    fontWeight: FontWeights.bold,
    color: Colors.primary,
    marginBottom: Spacing.sm,
    textAlign: "center",
  },

  subtitle: {
    fontSize: FontSizes.md,
    fontWeight: FontWeights.regular,
    color: Colors.textSecondary,
    textAlign: "center",
  },

  // Social Login
  socialContainer: {
    width: "100%",
    marginBottom: Spacing.lg,
  },

  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
    borderWidth: 1.5,
    borderColor: Colors.gray300,
    borderRadius: BorderRadius.lg,
    paddingVertical: Spacing.md + 2,
    gap: Spacing.sm + 4,
  },

  socialButtonText: {
    fontSize: FontSizes.md,
    fontWeight: FontWeights.semibold,
    color: Colors.textPrimary,
  },

  // Divider
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: Spacing.lg + 4,
    width: "100%",
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.gray300,
  },

  dividerText: {
    marginHorizontal: Spacing.md,
    fontSize: FontSizes.sm,
    fontWeight: FontWeights.medium,
    color: Colors.textSecondary,
  },

  // Form
  formContainer: {
    width: "100%",
    gap: Spacing.sm,
    marginBottom: Spacing.lg,
  },

  label: {
    fontSize: FontSizes.md,
    fontWeight: FontWeights.semibold,
    color: Colors.textPrimary,
  },

  forgotPasswordButton: {
    alignSelf: "flex-end",
    marginTop: -Spacing.sm,
  },

  forgotPasswordText: {
    fontSize: FontSizes.sm,
    fontWeight: FontWeights.medium,
    color: Colors.primary,
  },

  passwordLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: Spacing.sm,
  },


  // Login Button
  buttonContainer: {
    width: "100%",
    height: 'auto',
    marginBottom: Spacing.lg,
    gap: Spacing.md,
  },

  // Sign Up
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Spacing.lg,
  },

  signUpText: {
    fontSize: FontSizes.md,
    fontWeight: FontWeights.regular,
    color: Colors.textSecondary,
  },

  signUpLink: {
    fontSize: FontSizes.md,
    fontWeight: FontWeights.bold,
    color: Colors.primary,
  },

  // Privacy
  privacyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.sm,
    paddingHorizontal: Spacing.lg,
  },

  privacyText: {
    fontSize: FontSizes.xs,
    fontWeight: FontWeights.regular,
    color: Colors.textSecondary,
    textAlign: "center",
  },
});
