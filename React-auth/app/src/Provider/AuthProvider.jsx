import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { createContext } from "react";
import { useCookies } from "react-cookie";

export const AuthContext = createContext();

export  default function AuthProvider({children}){
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies();

  // const storeToken = (token) =>{
  //   const decodedToken = jwtDecode(token);
  //     setUser(decodedToken)
  // }

  const login = (token) => {
    if(token){
      setToken(token);
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
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