import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useStyles from './AppHeader.style'
import { Box } from '@material-ui/core'

const AppHeader: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar className={classes.appBar} color="inherit">
        <Toolbar>
          <Box className={classes.appTitle}>
            <Box className="primary" component="span">
              CHARLES
            </Box>
            <Box component="span"> DEV</Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default AppHeader
