import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";

import AppContext from "./src/utils/AppContext";

import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";
Amplify.configure(awsconfig);

import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black
} from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userId, setUserId] = useState(null);
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  let [fontsLoaded] = useFonts({
    RobotoRegular: Roboto_400Regular,
    RobotoLight: Roboto_300Light,
    RobotoMedium: Roboto_500Medium,
    RobotoBold: Roboto_700Bold,
    RobotoBlack: Roboto_900Black
  });

  if (!isLoadingComplete && !fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaProvider>
        <AppContext.Provider value={{ userId, setUserId }}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </AppContext.Provider>
      </SafeAreaProvider>
    );
  }
}
