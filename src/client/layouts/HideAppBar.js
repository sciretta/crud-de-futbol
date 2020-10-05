import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/core/styles/makeStyles'

function HideOnScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({ target: window ? window() : undefined })
  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  )
}

const useStyles = makeStyles(theme=>({
  root:{
    boxShadow:'none'
  },
  title:{
    display:'flex',
    flexGrow:1,
    justifyContent:'center'
  },
  container:{
    backgroundColor:theme.palette.background.default
  }
}))

export default function HideAppBar(props) {
  const { root,title,wrap,container } = useStyles()
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={root}>
          <Toolbar>
            <Typography className={title} variant={"h3"}>
              Crud de futbol
            </Typography>
            {props.switch}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Paper className={container}>
        <Grid container spacing={3} justify={"center"}>
          {props.children}
        </Grid>
      </Paper>
    </>
  )
}
