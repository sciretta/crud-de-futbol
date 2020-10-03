import React from 'react'
import {useState} from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import SendIcon from '@material-ui/icons/Send'

const findPlayerData = ()=>{
  return {
    nombre:document.getElementById('nombreJug').value,
    apellido:document.getElementById('apellido').value,
    edad:document.getElementById('edad').value,
    equipo:document.getElementById('equipo').value
  }
}

const useStyles = makeStyles(theme=>({
  wrap:{
    display:'flex',
    flexDirection:'column'
  },
  content:{
    display:'flex',
    padding:theme.padding,
    justifyContent:'space-between'
  },
  fields:{
    width:'25vw',
    margin:'0 5px',
    '&:active':{
      borderColor:theme.primary
    }
  }
}))

export default function PlayerForm({URL,fetchData}) {
  const { wrap,content,fields } = useStyles()
  const [ error,setError ] = useState(false)
  const [ posicion,setPosicion ] = useState('')

  const handleSubmit=(data)=>{
    const { nombre,apellido,edad,equipo } = data
    if(nombre && apellido && edad && posicion && equipo){
      fetch(URL, {
        method: 'POST',
        body:JSON.stringify({...data,posicion}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(fetchData(URL))
      setError(false)
    }else{
      setError(true)
      setTimeout(()=>setError(false),1000)
    }
  }

  return (
    <Card className={wrap}>
      <CardContent className={content}>
        <TextField autoComplete="off" error={error} className={fields} id="nombreJug" label="Nombre" variant="outlined"/>
        <TextField autoComplete="off" error={error} className={fields} id="apellido" label="Apellido" variant="outlined"/>
        <TextField autoComplete="off" error={error} className={fields} id="edad" label="Edad" variant="outlined"/>
      </CardContent>
      <CardContent className={content}>
        <TextField autoComplete="off" error={error} className={fields} id="equipo" label="Equipo" variant="outlined"/>
        <TextField select onChange={e=>setPosicion(e.target.value)} value={posicion} autoComplete="off" error={error} className={fields} label="Posicion" variant="outlined">
          {['delantero','mediocampo','defensa','portero'].map(pos => (
            <MenuItem key={pos} value={pos}>
              {pos}
            </MenuItem>
          ))}
        </TextField>
        <Button className={fields} onClick={()=>handleSubmit(findPlayerData())} >
          <SendIcon color={error?'disabled':'inherit'}/>
        </Button>
      </CardContent>
    </Card>
  )
}
