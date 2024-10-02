import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export  default function AuthProvider({children}){
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const storeToken = (token) =>{
    const decodedToken = jwtDecode(token);
      setUser(decodedToken)
  }

  const login = (token) => {
    if(token){
      setToken(token);
    }
  }
  const logout = () => {
    setUser(null);
    setToken(null);
  }

  return(
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
  )
}