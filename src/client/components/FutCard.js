import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep'
import handleDelete from '../handles/handleDelete'

const useStyles = makeStyles(theme=>({
  root: {
    margin:'5px 0',
    display:'flex',
    justifyContent:'space-between'
  },
  title: {
    padding:'5px 0'
  }
}))

export default function FutCard({item,URL,fetchData}) {
  const { root,title } = useStyles()

  const playerContent = (<>
    <Typography className={title} >
      {`${item.nombre} ${item.apellido}, ${item.edad}`}
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p" >
      {`${item.equipo}, ${item.posicion}`}
    </Typography>
  </>)

  const teamContent = (<>
    <Typography className={title} >
      {`${item.nombre}, ${item.pais}`}
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      {`Jugadores: ${item.jugadores}`}
    </Typography>
  </>)
  
  return (
    <Card className={root}>
      <CardContent>
        {item.tipo==='EQUIPO'?teamContent:playerContent}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>handleDelete(URL,fetchData,item)}>
          <DeleteSweepIcon/>
        </Button>
      </CardActions>
    </Card>
  )
}
