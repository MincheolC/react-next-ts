import React from 'react'
import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer'
import Box from '@material-ui/core/Box'
import useStyles from './AppSidebar.style'

interface AppSidebarProps {
  variant?: string
  isCollapsed?: boolean
  setCollapsed?: () => boolean
}

const AppSidebar: React.FC<AppSidebarProps> = ({ variant = '' }) => {
  const classes = useStyles()
  return (
    <>
      <Drawer
        classes={{
          root: clsx(variant),
          paper: clsx(variant),
        }}
        // open={true}
      >
        <Box height="100%" className={clsx(classes.sidebar, 'app-sidebar')}>
          <Box className={clsx(classes.sidebarBg, classes.sidebarStandard)}>
            Hello
          </Box>
        </Box>
      </Drawer>
    </>
  )
}

export default AppSidebar
