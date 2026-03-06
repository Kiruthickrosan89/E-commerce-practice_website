import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/Index'
import Header from './components/Header'
import LoginUser from './pages/auth/LoginUser'
import MainLayout from './layout/MainLayout'

const App = () => {
  return (
    <>
        
        <Routes>
              <Route path='/' Component={MainLayout}>
                    <Route index Component={HomePage}></Route>
              </Route>
              <Route path='/login' Component={LoginUser}/>
        </Routes>
    </>
  )
}

export default App
