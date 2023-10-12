import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSignUp = (e: any) => {
        e.preventDefault()
        alert(email + ' ' + password)
    }

    return (
        <div className='login-container'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
            <div className='login-input-container'>
                    <label htmlFor="">Full Name</label>
                    <input className='login-input' type="text" placeholder='John Doe' value={fullName} onChange={(e) => setFullName(e.target.value)} required/>
                </div>
                <div className='login-input-container'>
                    <label htmlFor="">Email</label>
                    <input className='login-input' type="email" placeholder='example@email.com' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className='login-input-container'>
                    <label htmlFor="">Password</label>
                    <input className='login-input' type="password" placeholder='*******' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className='login-input-container'>
                    <label htmlFor="">Confirm Password</label>
                    <input className='login-input' type="password" placeholder='*******' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>
                <input className='login-submit-button' type='submit' value={'Sign Up'} />
            </form>
            <hr className='login-hr' />
            <div className='social-login-container'>
                <button className='social-login-button social-login-button-google'>G</button>
                <button className='social-login-button social-login-button-facebook'>F</button>
                <button className='social-login-button social-login-button-linkedin'>L</button>
            </div>
            <p className='login-to-signup'>Have an account? <Link to={'/login'}>Login!</Link></p>
        </div>
    )
}

export default SignUp