import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "@src/definition/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/global.css";

function App() {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={"dark"} />
      <BrowserRouter>
        <Routes>
          <Route path="/" caseSensitive element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
