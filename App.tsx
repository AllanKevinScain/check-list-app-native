import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from './src/pages/login';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Login  />
    </>
  );
}

const styles = StyleSheet.create({});
