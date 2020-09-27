import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth:'50px',
    marginTop:'5px',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around'
  },
  title: {
    fontSize: 14,
    padding:'5px 0',
    margin:'0'
  }
})

export default function PlayerCard({item}) {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {`${item.nombre} ${item.apellido}, ${item.edad}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`${item.equipo}, ${item.posicion}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  )
}
