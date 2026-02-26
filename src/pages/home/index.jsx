import { use, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
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
      
      <div className='container'>
        <h1>Welcome to Poneglyph</h1>
        
        <form>
          <h1>Create Account</h1>
          <input name='username' placeholder='Username' ref={inputUsername}/>
          <input name='password' placeholder='Password' type='password' ref={inputPassword}/>
          <input name='email' placeholder='Email' type='email' ref={inputEmail}/>
          <input name='name' placeholder='Name' ref={inputName}/>
          <input name='fav_leader' placeholder='Favorite Leader' ref={inputFavLeader}/>
          <button type='button' onClick={createUser}>Register</button>
        </form>

        

      {users.map((user) => {
        return (
          <div key={user.username} className='card'> 
            <div>
            <p>Username: <span>{user.username}</span></p>
            <p>Password: <span>{user.password}</span></p>
            <p>Email: <span>{user.email}</span></p>
            <p>Name: <span>{user.name}</span></p>
            <p>Favorite Leader: <span>{user.fav_leader}</span></p>
          </div>
          <button onClick={() => deleteUser(user.id)}>
            <img src={Trash} alt="Trash Icon"/>
          </button>
        </div>
      )
    })}

    

        
        
      </div>
  )
}

export default Home
