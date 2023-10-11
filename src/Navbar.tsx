import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <Link to="/">Logo</Link>
        <Link to="/">Overview</Link>
        <Link to="/analytics">Analytics</Link>
    </div>
  )
}

export default Navbar