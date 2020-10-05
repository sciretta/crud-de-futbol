import React from 'react'
import {useState} from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import SendIcon from '@material-ui/icons/Send'
import handleSubmit from '../handles/handleSubmit'
import FormWrapper from '../HOC/FormWrapper'

function TeamForm({URL,fetchData,classes}){
  const [ error,setError ] = useState(false)
  const { wrapTeam,fields } = classes
  return (
    <Card className={classes.wrapTeam}>
      <TextField autoComplete='off' className={fields} error={error} id="nombreEq" label="Equipo"variant="outlined"/>
      <TextField autoComplete='off' className={fields} error={error} id="pais" label="Pais" variant="outlined"/>
      <Button className={fields} onClick={()=>handleSubmit('TEAM',setError,URL,fetchData)}>
        <SendIcon color={error?'disabled':'inherit'}/>
      </Button>
    </Card>
  )
}

export default FormWrapper(TeamForm)
