import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material"
import theme from "./theme"
import MainHeader from "./components/mainHeader";

function App() {
  return(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainHeader/>}>
          <Route path="/" element={<MainHeader/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
