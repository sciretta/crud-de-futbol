import React from 'react'
import Box from '@material-ui/core/Box'
import HideAppBar from './HOC/HideAppBar'
import FutCard from './components/FutCard'
import useFetch from './hooks/useFetch'
import PlayerForm from './components/PlayerForm'
import TeamForm from './components/TeamForm'

const playersURL = 'http://localhost:4000/api/players'
const teamsURL = 'http://localhost:4000/api/teams'

export default function App(){
  const [playersLoad,players] = useFetch(playersURL,[])
  const [teamsLoad,teams] = useFetch(teamsURL,[])
  return(
    <>
      <HideAppBar>
        <Box>
          {playersLoad?'Loading...':
            players.map(item =>
              <FutCard key={item._id} item={item} />
          )}
          <FutCard item={{nombre:'Leo',apellido:'Messi',edad:33,posicion:'delantero',equipo:'barcelona'}}/>
          <PlayerForm/>
        </Box>
        <Box>
          {teamsLoad?'Loading...':
            teams.map(item =>
              <FutCard key={item._id} item={item} />
          )}
          <FutCard item={{nombre:'barcelona',jugadores:5}}/>
          <TeamForm/>
        </Box>
      </HideAppBar>
    </>
  )
}
