import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import {FormControl,InputLabel,Input} from '@material-ui/core'

const findTeamData = ()=>{
  return {
    nombre:document.getElementById('nombreEq').value,
    pais:document.getElementById('pais').value
  }
}

const useStyles = makeStyles(theme=>({
  card:{
    display:'flex'
  }
}))

export default function PlayerForm({URL,fetchData}) {
  const classes = useStyles()

  const handleSubmit=(data)=>{
    fetch(URL, {
      method: 'POST',
      body:JSON.stringify(data),
      headers: { 
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(()=>{fetchData(URL)})
  }
  
  return (
    <Card className={classes.card}>
      <CardContent>
        <FormControl>
          <InputLabel htmlFor="nombreEq">Equipo</InputLabel>
          <Input id="nombreEq" />
        </FormControl>
      </CardContent>
      <CardContent>
        <FormControl>
          <InputLabel htmlFor="pais">Pais</InputLabel>
          <Input id="pais" />
        </FormControl>
      </CardContent>
      <CardActions>
        <Button onClick={()=>handleSubmit(findTeamData())}>Enviar</Button>
      </CardActions>
    </Card>
  )
}
