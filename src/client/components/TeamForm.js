import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import {FormControl,InputLabel,Input} from '@material-ui/core'

//const useStyles = makeStyles({
//
//})
//
const findTeamData = ()=>{
  return {nombre:document.getElementById('nombreEq').value}
}

const handleSubmit=(data)=>{
  console.log('enviando',data)
}

export default function PlayerForm() {
  //const classes = useStyles()
  return (
    <Card>
      <CardContent>
        <FormControl>
          <InputLabel htmlFor="nombreEq">Equipo</InputLabel>
          <Input id="nombreEq" />
        </FormControl>
      </CardContent>
      <CardActions>
        <Button onClick={()=>handleSubmit(findTeamData())}>Enviar</Button>
      </CardActions>
    </Card>
  )
}
