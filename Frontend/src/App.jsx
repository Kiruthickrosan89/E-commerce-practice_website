import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/Index'
import LoginUser from './pages/auth/LoginUser'
import MainLayout from './layout/MainLayout'
import RegisterUser from './pages/auth/RegisterUser'

const App = () => {
  return (
    <>
        
        <Routes>
              <Route path='/' Component={MainLayout}>
                    <Route index Component={HomePage}></Route>
              </Route>
              <Route path='/login' Component={LoginUser}/>
              <Route path='/register' Component={RegisterUser}/>
        </Routes>
    </>
  )
}

export default App
