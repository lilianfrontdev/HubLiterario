import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Home from "./pages/Home";
import MainHeader from "./components/MainHeader";
import CollectionPage from "./pages/Collection";
import BookDetail from "./pages/BookDetail";
import TeacherDashboard from "./pages/TeacherDashboard";
import Login from "./pages/Login";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainHeader />}>
            <Route path="/" element={<Home />} />
            <Route path="/obras" element={<CollectionPage />} />
            <Route path="/obras/:id" element={<BookDetail />} />
            <Route path="/professor/dashboard" element={<TeacherDashboard />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
