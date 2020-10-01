import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import {FormControl,InputLabel,Input} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField'

const findTeamData = ()=>{
  return {
    nombre:document.getElementById('nombreEq').value,
    pais:document.getElementById('pais').value
  }
}

const useStyles = makeStyles(theme=>({
  wrap:{
    display:'flex',
    padding:theme.padding,
    justifyContent:'center',
    alignItems:'center'
  },
  fields:{
    width:'15vw',
    '&:active':{
      borderColor:theme.primary
    }
  }
}))

export default function PlayerForm({URL,fetchData}) {
  const {fields,wrap} = useStyles()

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
    <Card className={wrap}>
      <TextField className={fields} id="nombreEq" label="Equipo"variant="outlined"/>
      <TextField className={fields} id="pais" label="Pais" variant="outlined"/>
      <Button onClick={()=>handleSubmit(findTeamData())}>
        <SendIcon/>
      </Button>
    </Card>
  )
}
