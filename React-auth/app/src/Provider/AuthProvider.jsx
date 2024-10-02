import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export  default function AuthProvider({children}){
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
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