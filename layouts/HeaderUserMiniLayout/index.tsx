import React from 'react'
import Box from '@material-ui/core/Box'
import AppHeader from './AppHeader'

const HeaderUserMiniLayout: React.FC<React.ReactNode> = (props) => {
  return (
    <Box>
      <AppHeader />
      {props.children}
    </Box>
  )
}

export default HeaderUserMiniLayout
