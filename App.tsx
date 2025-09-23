import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login';

export default function App() {
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
      <Login />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
