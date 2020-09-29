import React from 'react'
import useFetch from './hooks/useFetch'
import Box from '@material-ui/core/Box'
import HideAppBar from './HOC/HideAppBar'
import FutCard from './components/FutCard'
import PlayerForm from './components/PlayerForm'
import TeamForm from './components/TeamForm'

const playersURL = 'http://localhost:4000/api/players'
const teamsURL = 'http://localhost:4000/api/teams'

export default function App(){
  const [players,fetchPlayers] = useFetch(playersURL)//utilizar context
  const [teams,fetchTeams] = useFetch(teamsURL)//utilizar context
  
  return(
    <>
      <HideAppBar>
        <Box>
          {
            players?
            players.map(item =><FutCard key={item._id} item={{...item,tipo:'JUGADOR'}} URL={playersURL} fetchData={fetchPlayers}/>):
            'Loading...'
          }
          <PlayerForm URL={playersURL} fetchData={fetchPlayers}/>
        </Box>
        <Box>
          {
            teams?
            teams.map(item =><FutCard key={item._id} item={{...item,tipo:'EQUIPO'}} URL={teamsURL} fetchData={fetchTeams}/>):
            'Loading...'
          }
          <TeamForm URL={teamsURL} fetchData={fetchTeams}/>
        </Box>
      </HideAppBar>
    </>
  )
}
