import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import useStyles from './AppHeader.style'

const AppHeader: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar color="inherit" position="fixed">
        <Toolbar>
          <Hidden lgUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              // onClick={() => dispatch(toggleNavCollapsed())}>
            >
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
          </Hidden>
          <Typography className={classes.appTitle}>Charles DEV</Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default AppHeader
