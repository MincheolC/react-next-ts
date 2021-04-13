import React from 'react'
import Box from '@material-ui/core/Box'
import AppHeader from './AppHeader'
import useStyles from './index.style'

const HeaderUserMiniLayout: React.FC<React.ReactNode> = (props) => {
  const classes = useStyles()

  return (
    <Box className={classes.appMain}>
      <AppHeader />
      <Box className={classes.mainContent}>
        <Box className={classes.mainContainer}>{props.children}</Box>
      </Box>
    </Box>
  )
}

export default HeaderUserMiniLayout
