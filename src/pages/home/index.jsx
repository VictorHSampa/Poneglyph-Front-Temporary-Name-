import { use, useState, useRef } from 'react'
import './style.css'
import RegisterImage from '../../assets/uta.webp'
import api from '../../services/api'
import { useEffect } from 'react'


function Home() {
  const [users, setUsers] = useState(() => [])

  const inputName = useRef()
  const inputUsername = useRef()
  const inputPassword = useRef()
  const inputEmail = useRef()
  const inputFavLeader = useRef()

  async function getUsers() {
    const usersApi = await api.get('/user/allUsers')
    setUsers(usersApi.data)
    console.log(usersApi.data);
  }
  
  async function createUser() {
    await api.post('/user/register', {
      username: inputUsername.current.value,
      password: inputPassword.current.value,
      email: inputEmail.current.value,
      name: inputName.current.value,
      fav_leader: inputFavLeader.current.value
    }); 
  }

  async function deleteUser(id) {
    await api.delete(`/user/delete/${id}`)
    getUsers()
    }

  useEffect(() => {
    getUsers()
    
  }, [])

  return (
      
      <div className='home-container'>
        <form className='register-form'>
          <div className='register-header'>
            <h1>WELCOME TO PONEGLYPH!</h1>
            <p>Please enter your details</p>
          </div>
          <p>Username</p>
          <input name='username' placeholder='Username' ref={inputUsername}/>
          <p>Favorite Leader</p>
          <input name='fav_leader' placeholder='Favorite Leader' ref={inputFavLeader}/>
          <p>Email</p>
          <input name='email' placeholder='Email' type='email' ref={inputEmail}/>
          <p>Password</p>
          <input name='password' placeholder='Password' type='password' ref={inputPassword}/>
          <button type='button' onClick={createUser}>Register</button>
          <div className='login-redirect'>
          <p>Already have an account?<a href='/'> Login</a></p>
          </div>
        </form>
        <div className='register-image'>
          <img src={RegisterImage} alt='Register Image' />
        </div>

    

        
        
      </div>
  )
}

export default Home
