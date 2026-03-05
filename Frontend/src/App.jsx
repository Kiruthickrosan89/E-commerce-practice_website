import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/HomePage/Index'

const App = () => {
  return (
    <div>
        <Routes>
              <Route path='/' Component={Homepage}/>
        </Routes>
    </div>
  )
}

export default App
