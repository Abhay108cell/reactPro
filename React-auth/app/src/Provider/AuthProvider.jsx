import React, { useState, createContext } from 'react';
import { useCookies } from 'react-cookie';
import jwtDecode from 'jwt-decode'; // Make sure this import is correct
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies();

  const login = (token) => {
    if (token) {
      setToken(token);
      // setCookie('token', token, { path: '/' });
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      
      // setUser(decodedToken);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    removeCookie('token', { path: '/' });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
