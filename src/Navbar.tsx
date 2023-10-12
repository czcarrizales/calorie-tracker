import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <Link to="/">Overview</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/login" className='navbar-button'>Login</Link>
    </div>
  )
}

export default Navbar