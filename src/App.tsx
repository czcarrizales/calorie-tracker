import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>Navbar</div>
      <div className='app-calorie-container'>
        <h1>Calories</h1>
        <h2>1000</h2>
      </div>
      <div>
        <div>Detail</div>
        <div>Detail</div>
        <div>Detail</div>
        <div>Detail</div>
      </div>
      <div>
        Logs
      </div>
    </div>
  )
}

export default App
