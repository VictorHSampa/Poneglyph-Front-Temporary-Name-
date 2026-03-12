import { use, useState, useRef } from 'react'
import './style.css'
import api from '../../services/api'
import { useEffect } from 'react'


function Tracker() {
  const [tournament, setTournament] = useState(() => [])
  const token = localStorage.getItem('token')

  async function getTournament() {
    const tournamentApi = await api.get(`/tournament/allTournament/1`, { headers: { Authorization: `Bearer ${token}`}})
    setTournament(tournamentApi.data)

  }

  useEffect(() => {
    getTournament()
    
  }, [])

  return (
    <div className='tracker-container'>
      <h1 className = "tracker-title">TOURNAMENTS</h1>
      <button type='button'>New Tournament</button>

       {tournament.map((tournament) => {
        return (
          <div key={tournament.id} className='tournament-card'> 
            <div>
            <img className= 'tracker-leader-image'src={tournament.leader_image} alt={tournament.leader_image} />
            <p>{tournament.title}</p>
          </div>
        </div>
      )
    })}
    </div>
       
  )
}


export default Tracker
