import React from 'react'
import {useState} from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import SendIcon from '@material-ui/icons/Send'
import handleSubmit from '../handles/handleSubmit'

const useStyles = makeStyles(theme=>({
  wrap:{
    display:'flex',
    padding:'8px 0'
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
  const {fields,wrap} = useStyles()
  const [ error,setError ] = useState(false)
  
  return (
    <Card className={wrap}>
      <TextField autoComplete='off' className={fields} error={error} id="nombreEq" label="Equipo"variant="outlined"/>
      <TextField autoComplete='off' className={fields} error={error} id="pais" label="Pais" variant="outlined"/>
      <Button className={fields} onClick={()=>handleSubmit('TEAM',setError,URL,fetchData)}>
        <SendIcon color={error?'disabled':'inherit'}/>
      </Button>
    </Card>
  )
}
