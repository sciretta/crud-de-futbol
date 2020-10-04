import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/core/styles/makeStyles'

function HideOnScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({ target: window ? window() : undefined })
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const useStyles = makeStyles(theme=>({
  root:{
    boxShadow:'none',
    background:theme.palette.background.header,
    color:theme.palette.text.primary
  },
  title:{
    display:'flex',
    flexGrow:1,
    justifyContent:'center',
    color:theme.palette.text.primary
  }
}))

export default function HideAppBar(props) {
  const { root,title,wrap } = useStyles()
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={root}>
          <Toolbar>
            <Typography className={title} variant={"h3"}>Crud de futbol</Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Grid container spacing={3} justify={'center'}>
        {props.children}
      </Grid>
    </>
  )
}
