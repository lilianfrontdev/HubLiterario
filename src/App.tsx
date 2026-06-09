import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Home from "./pages/Home";
import MainHeader from "./components/MainHeader";
import CollectionPage from "./pages/Collection";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainHeader/>}>
            <Route path="/" element={<Home />} />
            <Route path="/obras" element={<CollectionPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
