import React from 'react'
import useAuth from '../../hookes/useAuth'
import { Navigate } from 'react-router-dom';

const ProtectiveRoute = ({children}) => {
  const {token} = useAuth();

  return <>{token ? children : <Navigate to="/signin" />}</>

}

export default ProtectiveRoute