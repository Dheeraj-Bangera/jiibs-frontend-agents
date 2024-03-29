import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  //TODO: to fetch token from local storage or cookies and set the userdata to context
  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };
  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
    navigate("/login");
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
