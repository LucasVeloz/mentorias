import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components/native";
import themeSelector from "./src/global/theme/themeSelector";
import { Routes } from "./src/routes";

const client = new QueryClient();
export default function App() {
  const colorScheme = useColorScheme();

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={themeSelector[colorScheme ?? "light"]}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
