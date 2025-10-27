import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login/Login";
import Welcome from "../pages/Welcome/Welcome";
import Register from "../pages/Register/Registe";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import VerifyCode from "../pages/VerifyCode/VerifyCode";
import ResetPassword from "../pages/NewPassword/NewPassword";
import TwoFactorAuth from "../pages/TwoFactorAuth/TwoFactorAuth";

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  VerifyCode: undefined;
  ResetPassword: undefined;
  TwoFactorAuth: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="TwoFactorAuth" component={TwoFactorAuth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
