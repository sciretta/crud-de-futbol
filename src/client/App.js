import React from 'react'
import Box from '@material-ui/core/Box'
import HideAppBar from './HOC/HideAppBar'
import PlayerCard from './components/PlayerCard'
import useFetch from './hooks/useFetch'

const plyrsURL = 'http://localhost:4000/api/players'
const tmsURL = 'http://localhost:4000/api/teams'

export default function App(){
  const [plyrsLoad,players] = useFetch(plyrsURL,[])
  const [tmsLoad,teams] = useFetch(tmsURL,[])
  return(
    <>
      <HideAppBar>
        <Box>
          {players.map(item => 
            <PlayerCard key={item._id} item={item} />
          )}
        </Box>
        <Box>
          {teams.map(item => 
            <div>{item.nombre}</div>
          )}
        </Box>
      </HideAppBar>
    </>
  )
}
