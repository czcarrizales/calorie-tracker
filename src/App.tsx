import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Overview from './Overview'
import { Route, Routes } from 'react-router-dom'
import Analytics from './Analytics'
import Modal from './Modal'
import Login from './Login'
import SignUp from './SignUp'
import { useSelector } from 'react-redux'

function App() {

  const app = useSelector((state: any) => state.app)

  return (
    <>
    <Navbar />
    <div className='app-main-container'>
      {app.showModal && <Modal />}
    <Routes>
      <Route path='/' element={<Overview />} />
      <Route path='/analytics' element={<Analytics />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
    {/* <div className="circle-button" onClick={() => setShowModal(true)}>add</div> */}
    </div>
    </>
  )
}

export default App
