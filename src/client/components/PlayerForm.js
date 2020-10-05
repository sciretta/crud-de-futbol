import React,{useState} from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import SendIcon from '@material-ui/icons/Send'
import handleSubmit from '../handles/handleSubmit'
import FormWrapper from '../HOC/FormWrapper'

function PlayerForm({URL,fetchData,classes,error,setError}) {
  const { wrapPlayer,content,fields } = classes
  const [ posicion,setPosicion ] = useState('')
  return (
    <Card className={classes.wrapPlayer}>
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
        <Button className={fields} onClick={()=>handleSubmit('PLAYER',setError,URL,fetchData,{posicion})} >
          <SendIcon color={error?'disabled':'inherit'}/>
        </Button>
      </CardContent>
    </Card>
  )
}

export default FormWrapper(PlayerForm)
