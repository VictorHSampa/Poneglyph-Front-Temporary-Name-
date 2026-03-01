import { use, useState, useRef } from 'react'
import './style.css'
import api from '../../services/api'
import { useEffect } from 'react'
import LoginImage from '../../assets/uta.webp'


function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    try {
      const response = await api.post('/user/login', {
        email,
        password
      })
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='container'>
      <form className='Login-form'>
        <div className='login-header'>
          <h1>WELCOME BACK</h1>
          <p>Please enter your details</p>
        </div>
        <p>Email</p>
        <input name='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>Password</p>
        <input name='password' placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='button' onClick={handleLogin}>Sign in</button>
        <p className='register'>Don't have an account?<a href='/register'> Sign up for free!</a></p>
      </form>
      <div className='login-image'>
          <img src={LoginImage} alt='Login Image' />
        </div>
    </div>
  )
}

export default Login
