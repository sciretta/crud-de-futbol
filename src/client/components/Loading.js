import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Skeleton from '@material-ui/lab/Skeleton'
import Card from '@material-ui/core/Card'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(theme=>({
  root: {
    margin:'5px 0',
    padding:'0 14px'
  },
  skeleton:{
  	margin:'10px 0',
  	borderRadius:'4px'
  }
}))

export default function Loading(){
  const { root,skeleton } = useStyles()
  return(
  	<Card className={root}>
        <Skeleton variant='rect' className={skeleton} animation='wave' height={50}/>
        <Divider/>
        <Skeleton variant='rect' className={skeleton} animation='wave' height={30}/>
  	</Card>
  )
}