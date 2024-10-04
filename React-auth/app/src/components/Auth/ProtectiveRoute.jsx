import React from 'react'
import useAuth from '../../hookes/useAuth'

const ProtectiveRoute = ({children}) => {
  const {} = useAuth();

  return (
    <div>ProtectiveRoute</div>
  )
}

export default ProtectiveRoute