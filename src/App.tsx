import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Overview from './Overview'
import { Route, Routes } from 'react-router-dom'
import Analytics from './Analytics'

function App() {

  return (
    <>
    <Navbar />
    <div className='app-main-container'>
    <Routes>
      <Route path='/' element={<Overview />} />
      <Route path='/analytics' element={<Analytics />} />
    </Routes>
    </div>
    
    </>
  )
}

export default App
