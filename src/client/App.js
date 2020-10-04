import React from 'react'
import {useState} from 'react'
import useFetch from './hooks/useFetch'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import HideAppBar from './layouts/HideAppBar'
import FutCard from './components/FutCard'
import PlayerForm from './components/PlayerForm'
import TeamForm from './components/TeamForm'
import Loading from './components/Loading'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
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
  }
})

const App = ()=>{
  const [players,fetchPlayers] = useFetch(playersURL)
  const [teams,fetchTeams] = useFetch(teamsURL)
  const [clicked,setClicked] = useState(true)
  console.log('renderizando app')
  return(
    <ThemeProvider theme={darkTheme}>
      <HideAppBar>
        <Grid item xs={12}>
          <Hidden only={['sm','md','lg']}>
            <ButtonGroup variant="text" fullWidth={true}>
              <Button disabled={!clicked} variant='contained' color='primary' onClick={()=>setClicked(false)}>
                PLAYERS
              </Button>
              <Button disabled={clicked} variant='contained' color='primary' onClick={()=>setClicked(true)}>
                TEAMS
              </Button>
            </ButtonGroup>
          </Hidden>
        </Grid>
        <Grid item lg={5} md={5} sm={5} xs={11}>
          <Hidden xsDown={clicked}>
            {
              players?
              players.map(item =><FutCard key={item._id} item={{...item,tipo:'JUGADOR'}} URL={playersURL} fetchData={fetchPlayers}/>):
              [...new Array(3)].map((item,index)=><Loading key={index}/>)
            }
            <PlayerForm URL={playersURL} fetchData={fetchPlayers}/>
          </Hidden>
        </Grid>
        <Grid item lg={5} md={5} sm={5} xs={11}>
          <Hidden xsDown={!clicked}>
            {
              teams?
              teams.map(item =><FutCard key={item._id} item={{...item,tipo:'EQUIPO'}} URL={teamsURL} fetchData={fetchTeams}/>):
              [...new Array(3)].map((item,index)=><Loading key={index}/>)
            }
            <TeamForm URL={teamsURL} fetchData={fetchTeams}/>
          </Hidden>
        </Grid>
      </HideAppBar>
    </ThemeProvider>
  )
}

export default App
