import { Loading } from "@/src/components/Loading";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Groups } from "@screens/Groups";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "../src/theme";
import { NewGroup } from "@/src/screens/NewGroup";
import { Player } from "@/src/screens/Player";
export default function Index() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="transparent" translucent />
      {fontsLoaded ? <Player /> : <Loading />}
    </ThemeProvider>
  );
}
