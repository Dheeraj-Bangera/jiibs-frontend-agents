import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayoutRoutes from "./MainLayoutRoutes";
import LoginPage from "./pages/login/LoginPage";
import ResetPassword from "./pages/password-reset/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<MainLayoutRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
