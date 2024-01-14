import {globalStyles} from "./styles/style";
import {useCallback, useState} from "react";
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import MainStack from './navigate';
import {SafeAreaView} from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";



export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    'mt-bold': require('./fonts/Montserrat-SemiBold.ttf'),
    'mt-regular': require('./fonts/Montserrat-Regular.ttf')
  });

  const onLayoutFontReview = useCallback(async () => {
    if (fontsLoaded || fontsError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError])

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
      <NavigationContainer>
          <MainStack/>
      </NavigationContainer>

  );
}