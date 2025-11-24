import { fonts } from "@/constants/fonts";
import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import './global.css';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({

    'Caveat': fonts.Caveat,
    'Dancing Script': fonts.DancingScript,
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar hidden />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
