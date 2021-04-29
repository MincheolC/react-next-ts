import React from 'react'
import Box from '@material-ui/core/Box'
import AppHeader from './AppHeader'
import useStyles from './index.style'

const APP_TITLE = 'CHARLES DEV'
const MENU = [
  { name: 'REACT', url: '/' },
  { name: 'CSS', url: '/css' },
  { name: 'FLUTTER', url: '/' },
  { name: 'TYPESCRIPT', url: '/' },
]

const HeaderUserMiniLayout: React.FC<React.ReactNode> = (props) => {
  const classes = useStyles()

  return (
    <Box className={classes.appMain}>
      <AppHeader title={APP_TITLE} menu={MENU} />
      <Box className={classes.mainContent}>
        <Box className={classes.mainContainer}>{props.children}</Box>
      </Box>
    </Box>
  )
}

export default HeaderUserMiniLayout
