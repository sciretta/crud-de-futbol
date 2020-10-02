import React from 'react'
import {useState} from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import SendIcon from '@material-ui/icons/Send'

const findTeamData = ()=>{
  return {
    nombre:document.getElementById('nombreEq').value,
    pais:document.getElementById('pais').value
  }
}

const useStyles = makeStyles(theme=>({
  wrap:{
    display:'flex',
    padding:theme.padding
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

  const handleSubmit=(data)=>{
    const { nombre,pais } = data
    if(nombre && pais){
      fetch(URL, {
        method: 'POST',
        body:JSON.stringify(data),
        headers: { 
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(()=>{fetchData(URL)})
      setError(false)
    }else{
      setError(true)
      setTimeout(()=>setError(false),1000)
    }
  }
  
  return (
    <Card className={wrap}>
      <TextField autoComplete='off' className={fields} error={error} id="nombreEq" label="Equipo"variant="outlined"/>
      <TextField autoComplete='off' className={fields} error={error} id="pais" label="Pais" variant="outlined"/>
      <Button className={fields} onClick={()=>handleSubmit(findTeamData())}>
        <SendIcon color={error?'disabled':'inherit'}/>
      </Button>
    </Card>
  )
}
