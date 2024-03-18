import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayoutRoutes from "./MainLayoutRoutes";
import LoginPage from "./pages/login/LoginPage";
import ResetPassword from "./pages/password-reset/ResetPassword";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          {/* TODO: uncomment these routes, so that reset password becomes private route */}
          {/* <Route element={<PrivateRoutes />}> */}
          <Route path="/reset-password" element={<ResetPassword />} />
          {/* </Route> */}
          <Route path="*" element={<MainLayoutRoutes />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
