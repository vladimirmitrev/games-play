import { createContext } from 'react';
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

import * as authService from '../services/authService';
import Path from '../paths';
import usePersistedState from '../hooks/usePersistedState';

const AuthContext = createContext();

export const AuthProvider = ({ 
    children
 }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = usePersistedState('auth', {});

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);

    localStorage.setItem('accessToken', result.accessToken);

    navigate(Path.Home);
  };

  const registerSubmitHandler = async (values) => {
    if (values.password === values.confirmPassword) {
      const result = await authService.register(values.email, values.password);

      setAuth(result);

      localStorage.setItem('accessToken', result.accessToken);

      navigate(Path.Home);
    } else {
      console.log('Passwords doesn`t match');
      return navigate(Path.Register);
    }
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken');
    navigate(Path.Home);
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
    _id: auth._id
  };
  return (
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  ) 
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;
