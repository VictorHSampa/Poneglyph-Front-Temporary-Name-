import { use, useState, useRef } from 'react'
import viteLogo from '/vite.svg'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'
import { useEffect } from 'react'


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
      <h1>Welcome to Poneglyph</h1>
      <form>
        <h1>Login</h1>
        <input name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input name='password' placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type='button' onClick={handleLogin}>Login</button>
        <div className='register'>
        <h1>Don't have an account?<a href='/register'> Register here</a></h1>
        </div>
      </form>
       
      

    </div>
  )
}

export default Login
