import React from 'react'
import useAuth from '../../hookes/useAuth'
import { Navigate } from 'react-router-dom';

const AlreadySigninRoute = ({children}) => {
  const {token} = useAuth();

  return <>{!token ? children : <Navigate to="/" />}</>
  // return null;

}

export default AlreadySigninRoute