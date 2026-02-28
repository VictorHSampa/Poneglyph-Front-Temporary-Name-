import { use, useState, useRef } from 'react'
import './style.css'
import api from '../../services/api'
import { useEffect } from 'react'
const defaultUserId = 2 

function Profile() {
  const [user, setUser] = useState(() => [])

  async function getUser() {
    const userApi = await api.get(`/user/profile/${defaultUserId}`)
    setUser(userApi.data)
    console.log(userApi.data);
  }

  useEffect(() => {
    getUser()
    
  }, [])

  return (
    <div className='container'>
      <h1 className = "profile-title">My Profile</h1>
        <div className='leader-image'>
          <img src={user.leader_image} alt={user.fav_leader} />
        </div>
        <h1 className = "fav-leader">{user.fav_leader}</h1>
        <form>
        <input name='username' placeholder={user.username} ref={inputUsername}/>
        <input name='fav_leader' placeholder={user.fav_leader} ref={inputFavLeader}/>
        <button type='button' onClick={createUser}>Save</button>
        </form>

    </div>
       
  )
}


export default ProfileEdit
