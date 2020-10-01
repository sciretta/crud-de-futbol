import React from 'react'
import {useRef} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import {FormControl,InputLabel,Input} from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import SendIcon from '@material-ui/icons/Send'

const findPlayerData = ()=>{
  return {
    nombre:document.getElementById('nombreJug').value,
    apellido:document.getElementById('apellido').value,
    edad:document.getElementById('edad').value,
    posicion:document.getElementById('posicion').value,
    equipo:document.getElementById('equipo').value
  }
}

const useStyles = makeStyles(theme=>({
  wrap:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  content:{
    display:'flex',
    padding:theme.padding,
    justifyContent:'space-beetween'
  },
  fields:{
    width:'14vw',
    '&:active':{
      borderColor:theme.primary
    }
  }
}))

export default function PlayerForm({URL,fetchData}) {
  const { wrap,content,fields } = useStyles()
  const handleSubmit=(data)=>{
    fetch(URL, {
      method: 'POST',
      body:JSON.stringify(data),
      headers: { 
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(fetchData(URL))
  }

  return (
    <Card className={wrap}>
      <CardContent className={content}>
        <TextField className={fields} id="nombreJug" label="Nombre" variant="outlined"/>
        <TextField className={fields} id="apellido" label="Apellido" variant="outlined"/>
        <TextField className={fields} id="edad" label="Edad" variant="outlined"/>
      </CardContent>
      <CardContent className={content}>
        <TextField className={fields} id="equipo" label="Equipo" variant="outlined"/>
        <TextField className={fields} id="posicion" label="Posicion" variant="outlined"/>
        <Button onClick={()=>handleSubmit(findPlayerData())} >
          <SendIcon/>
        </Button>
      </CardContent>
    </Card>
  )
}
