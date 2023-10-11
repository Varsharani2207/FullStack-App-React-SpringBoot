// AuthContext.js
import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const login = (userData) => {

    //const authenticate=(userData)=>
      axios.post("http://localhost:8080/admin/authenticate",userData)
          .then((userData)=>{
                setUser(userData);
                setIsLogin(true);
                const navigate = useNavigate;

                navigate("/");//navigate after successul login
                })
          .catch((err)=>alert("Authentication failed"+ err));

    console.log(userData);
   // authenticate(loginDto);

    // Implement your login logic here
    //setIsLogin(true);
    //setUser(userData);
  };

  const logout = () => {
    // Implement your logout logic here
    setIsLogin(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

    export { AuthProvider, useAuth };
