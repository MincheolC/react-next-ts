import React, { useContext } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import useStyles from './AppHeader.style'
import { AppContext } from '../../components/utility/ContextProvider'

const AppHeader: React.FC = () => {
  const classes = useStyles()
  const { changeNavCollapsed } = useContext(AppContext)

  return (
    <>
      <AppBar style={{ maxHeight: '64px' }} color="inherit" position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => changeNavCollapsed()}
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          <Typography className={classes.appTitle}>Charles DEV</Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default AppHeader
