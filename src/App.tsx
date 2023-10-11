import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Overview from './Overview'
import { Route, Routes } from 'react-router-dom'
import Analytics from './Analytics'
import Modal from './Modal'
import { useSelector } from 'react-redux'

function App() {

  const [showModal, setShowModal] = useState(false)
  const user = useSelector((state) => state.user)

  // const getAllCalories = () => {
  //   const allCalories = foodLog.map((item) => {
  //     return item.calories
  //   })
  //   return allCalories.reduce((acc, current) => acc + current, 0)
  // }

  return (
    <>
    <Navbar />
    <div className='app-main-container'>
      {showModal && <Modal setShowModal={setShowModal} />}
    <Routes>
      <Route path='/' element={<Overview />} />
      <Route path='/analytics' element={<Analytics />} />
    </Routes>
    <div className="circle-button" onClick={() => setShowModal(true)}>add</div>
    </div>
    </>
  )
}

export default App
