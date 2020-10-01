import React from 'react'
import useFetch from './hooks/useFetch'
import Box from '@material-ui/core/Box'
import HideAppBar from './HOC/HideAppBar'
import FutCard from './components/FutCard'
import PlayerForm from './components/PlayerForm'
import TeamForm from './components/TeamForm'
import { grey, blueGrey } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const playersURL = 'http://localhost:4000/api/players'
const teamsURL = 'http://localhost:4000/api/teams'


const darkTheme = createMuiTheme({
  palette:{
    background:{
      default:grey[900],
      paper:blueGrey[500],
      header:blueGrey[800]
    },
    buttons:{
      default:grey[800],
      active:grey[50],
      hover:grey[900]
    },
    text:{
      primary:grey[50],
      secondary:grey[300],
      disabled:grey[400]
    },
    divider:'black',
    primary:{
      main:grey[900]
    }
  },
  padding:'10px'
})

export default function App(){
  const [players,fetchPlayers] = useFetch(playersURL)//utilizar context
  const [teams,fetchTeams] = useFetch(teamsURL)//utilizar context

  return(
    <ThemeProvider theme={darkTheme}>
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
    </ThemeProvider>
  )
}
