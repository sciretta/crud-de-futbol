import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep'

const useStyles = makeStyles(theme=>({
  root: {
    marginTop:'5px',
    marginBottom:'5px',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around'
  },
  title: {
    padding:'5px 0',
    margin:'none'
  }
}))

export default function FutCard({item,URL,fetchData}) {
  const classes = useStyles()

  const handleDelete = () =>{
    if(item.tipo==='EQUIPO'){
      fetch(URL, {
        method: 'DELETE',
        body:JSON.stringify(item),
        headers: { 
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(fetchData(URL))
    }else{
      fetch(URL, {
        method: 'DELETE',
        body:JSON.stringify(item),
        headers: { 
          'Content-Type': 'application/json'
        }
      })
      .then(res =>res.json())
      .then(fetchData(URL))
    }
  }

  const playerContent = (<>
    <Typography className={classes.title} >
      {`${item.nombre} ${item.apellido}, ${item.edad}`}
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p" >
      {`${item.equipo}, ${item.posicion}`}
    </Typography>
  </>)

  const teamContent = (<>
    <Typography className={classes.title} >
      {`${item.nombre}, ${item.pais}`}
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      {`Jugadores: ${item.jugadores}`}
    </Typography>
  </>)
  
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        {item.tipo==='EQUIPO'?teamContent:playerContent}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>handleDelete()}>
          <DeleteSweepIcon/>
        </Button>
      </CardActions>
    </Card>
  )
}
