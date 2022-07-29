import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Loading from "@src/components/common/loading";
import theme from "@src/definition/theme";
import Home from "@src/pages/Home";
import DetailPortfolio from "@src/pages/Portfolio/detail";
import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global.css";

// const HomePage = lazy(() => import("./pages/Home"));
// const DetailPortfolio = lazy(() => import("./pages/Portfolio/detail"));

function App() {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {/* <Suspense fallback={<Loading />}> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" caseSensitive element={<Home />} />
            <Route path="/portfolio/:id" element={<DetailPortfolio />} />
          </Routes>
        </BrowserRouter>
        {/* </Suspense> */}
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
