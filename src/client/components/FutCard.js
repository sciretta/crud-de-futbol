import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';

const useStyles = makeStyles({
  root: {
    minWidth:'50px',
    marginTop:'5px',
    marginBottom:'5px',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around'
  },
  title: {
    fontSize: 14,
    padding:'5px 0',
    margin:'none'
  },
  content:{
    margin:'none'
  }
})

export default function FutCard({item}) {
  const classes = useStyles()

  const playerContent = (<>
    <Typography className={classes.title} color="textSecondary" >
      {`${item.nombre} ${item.apellido}, ${item.edad}`}
    </Typography>
    <Typography variant="body2" component="p" gutterBottom >
      {`${item.equipo}, ${item.posicion}`}
    </Typography>
  </>)

  const teamContent = (<>
    <Typography className={classes.title} color="textSecondary" >
      {`${item.nombre}`}
    </Typography>
    <Typography variant="body2" component="p" gutterBottom >
      {`Jugadores: ${item.jugadores}`}
    </Typography>
  </>)
  
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        {item.jugadores?teamContent:playerContent}
      </CardContent>
      <CardActions>
        <Button size="small">
          <DeleteSweepIcon/>
        </Button>
      </CardActions>
    </Card>
  )
}
