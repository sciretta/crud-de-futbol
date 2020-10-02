import React from 'react'
import useFetch from './hooks/useFetch'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import HideAppBar from './layouts/HideAppBar'
import FutCard from './components/FutCard'
import PlayerForm from './components/PlayerForm'
import TeamForm from './components/TeamForm'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Skeleton from '@material-ui/lab/Skeleton'
import blueGrey from '@material-ui/core/colors/blueGrey'
import grey from '@material-ui/core/colors/grey'
import red from '@material-ui/core/colors/red'

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
    primary:{
      main:grey[900]
    },
    secondary:red
  },
  padding:'10px'
})

export default function App(){
  const [players,fetchPlayers] = useFetch(playersURL)
  const [teams,fetchTeams] = useFetch(teamsURL)

  return(
    <ThemeProvider theme={darkTheme}>
      <HideAppBar>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          {
            players?
            players.map(item =><FutCard key={item._id} item={{...item,tipo:'JUGADOR'}} URL={playersURL} fetchData={fetchPlayers}/>):
            <Typography component='div' variant='h2'>
              <Skeleton variant='rect'>
                Loading...
              </Skeleton>
            </Typography>
          }
          <PlayerForm URL={playersURL} fetchData={fetchPlayers}/>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          {
            teams?
            teams.map(item =><FutCard key={item._id} item={{...item,tipo:'EQUIPO'}} URL={teamsURL} fetchData={fetchTeams}/>):
            <Typography component='div' variant='h2'>
              <Skeleton variant='rect'>
                Loading...
              </Skeleton>
            </Typography>
          }
          <TeamForm URL={teamsURL} fetchData={fetchTeams}/>
        </Grid>
      </HideAppBar>
    </ThemeProvider>
  )
}
