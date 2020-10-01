import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Container from '@material-ui/core/Container'
import Slide from '@material-ui/core/Slide'
import {makeStyles} from '@material-ui/core/styles'

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
    background:theme.palette.background.header
  },
  title:{
    display:'flex',
    flexGrow:1,
    justifyContent:'center',
    color:theme.palette.text.primary
  },
  wrap:{
    display:'grid',
    gridTemplateColumns:'1fr 1fr',
    rowGap:'8px',
    columnGap:'5px',
    paddingLeft:'7vw',
    paddinRight:'7vw'
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
            <Typography className={title} variant="h3">CRUD de Futbol.</Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container className={wrap}>
        {props.children}
      </Container>
    </>
  )
}
