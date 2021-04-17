import { AppProps } from "next/app";
import { AuthProvider } from "../util/auth";
import {
  ChakraProvider,
  theme,
  CSSReset,
  ColorModeProvider,
} from "@chakra-ui/react";
import ThemeSelector from "../components/Theme";
function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <ThemeSelector />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
