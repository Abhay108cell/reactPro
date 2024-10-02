import { createContext } from "react";

export const AuthContext = createContext();

export  default function AuthProvider({children}){
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