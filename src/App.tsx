import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Overview from './Overview'
import { Route, Routes } from 'react-router-dom'
import Analytics from './Analytics'
import Modal from './Modal'
import Login from './Login'
import SignUp from './SignUp'

function App() {

  const [showModal, setShowModal] = useState(false)

  return (
    <>
    <Navbar />
    <div className='app-main-container'>
      {showModal && <Modal setShowModal={setShowModal} />}
    <Routes>
      <Route path='/' element={<Overview showModal={showModal} setShowModal={setShowModal} />} />
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
