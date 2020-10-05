import React, {useState} from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  wrapTeam:{
    display:'flex',
    padding:'8px 0'
  },
  wrapPlayer:{
  	display:'flex',
  	flexDirection:'column'
  },
  fields:{
    width:'25vw',
    margin:'0 5px'
  },
  content:{
    display:'flex',
    padding:'8px 0',
    justifyContent:'space-between'
  }
})

export default function FormWrapper(Component){
	return function (prevProps){
    const [ error,setError ] = useState(false)
		const classes = useStyles()
		const {fetchData,URL} = prevProps
    return <Component error={error} setError={setError} classes={classes} URL={URL} fetchData={fetchData}/>
  }
} 