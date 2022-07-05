import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "@src/definition/theme";
import DetailPortfolio from "@src/pages/Portfolio/detail";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/global.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <BrowserRouter>
          <Routes>
            <Route path="/" caseSensitive element={<Home />} />
            <Route path="/portfolio/:id" element={<DetailPortfolio />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
