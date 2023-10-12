import {  useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e: any) => {
        e.preventDefault()
        alert(email + ' ' + password)
    }

    return (
        <div className='login-container'>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div className='login-input-container'>
                    <label htmlFor="">Email</label>
                    <input className='login-input' type="text" placeholder='example@email.com' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className='login-input-container'>
                    <label htmlFor="">Password</label>
                    <input className='login-input' type="password" placeholder='*******' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <input className='login-submit-button' type='submit' value={'Login'} />
            </form>
            <hr className='login-hr' />
            <div className='social-login-container'>
                <button className='social-login-button social-login-button-google'>G</button>
                <button className='social-login-button social-login-button-facebook'>F</button>
                <button className='social-login-button social-login-button-linkedin'>L</button>
            </div>
            <p className='login-to-signup'>No account? <Link to={'/signup'}>Sign up!</Link></p>
        </div>
    )
}

export default Login