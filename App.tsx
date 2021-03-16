import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Root from './app/index';

export default function App() {
  const [fontsLoaded] = useFonts({
    Spartan: require('./app/assets/fonts/Spartan-Regular.ttf'),
    Spartan_medium: require('./app/assets/fonts/Spartan-Medium.ttf'),
    Spartan_bold: require('./app/assets/fonts/Spartan-Bold.ttf'),
    Ionicons: require('native-base/Fonts/Ionicons.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar style="auto" />
        <Root />
      </>
    );
  }
}
