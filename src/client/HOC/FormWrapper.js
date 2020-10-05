import React from 'react'
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

export default function (Component){
	return function (prevProps){
		const classes = useStyles()
		const {fetchData,URL} = prevProps
    return <Component classes={classes} URL={URL} fetchData={fetchData}/>
  }
} 