import React from 'react'
import { AuthContextprovider } from './AuthContext'

const MainContext = ({children}) => {
  return (
    <AuthContextprovider>
        {children}
    </AuthContextprovider>
  )
}

export default MainContext
