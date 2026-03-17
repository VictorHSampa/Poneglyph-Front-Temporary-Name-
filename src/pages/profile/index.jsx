import { use, useState, useRef } from 'react'
import './style.css'
import api from '../../services/api'
import { useEffect } from 'react'
import Header from '../../components/Header'

function Profile() {
  const [user, setUser] = useState(() => [])
  const token = localStorage.getItem('token')

  async function getUser() {
    const userApi = await api.get(`/user/profile`, { headers: { Authorization: `Bearer ${token}` } })
    setUser(userApi.data)

  }

  useEffect(() => {
    getUser()

  }, [])

  return (
    <>
      <Header />
      <div className='profile-container'>
        <h1 className="profile-title">My Profile</h1>
        <div className='leader-image'>
          <img src={user.leader_image} alt={user.fav_leader} />
        </div>
        <div className='profile-form'>
          <label htmlFor='username'>Username:</label>
          <input id='username' disabled name='username' placeholder='Username' value={user.username} />

          <label htmlFor='favorite-leader'>Favorite Leader:</label>
          <input id='favorite-leader' disabled name='favorite-leader' placeholder='Favorite leader' value={user.fav_leader} />

          <label htmlFor='email'>Email:</label>
          <input id='email' disabled name='email' placeholder='Email' value={user.email} />

          <button type='button'>Edit Profile</button>
          <button type='button'>Change Password</button>
        </div>
      </div>
    </>
  )
}


export default Profile
