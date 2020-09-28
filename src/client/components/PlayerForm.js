import React from 'react'
import {useRef} from 'react'
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
const findPlayerData = ()=>{
  return {
    nombre:document.getElementById('nombreJug').value,
    apellido:document.getElementById('apellido').value,
    edad:document.getElementById('edad').value,
    posicion:document.getElementById('posicion').value,
    equipo:document.getElementById('equipo').value
  }
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
          <InputLabel htmlFor="nombreJug">Nombre</InputLabel>
          <Input id="nombreJug" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="apellido">Apellido</InputLabel>
          <Input id="apellido" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="edad">Edad</InputLabel>
          <Input id="edad" />
        </FormControl>
      </CardContent>
      <CardContent>
        <FormControl>
          <InputLabel htmlFor="posicion">posicion</InputLabel>
          <Input id="posicion" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="equipo">equipo</InputLabel>
          <Input id="equipo" />
        </FormControl>
      </CardContent>
      <CardActions>
        <Button onClick={()=>handleSubmit(findPlayerData())} >Enviar</Button>
      </CardActions>
    </Card>
  )
}
