import React, { useContext } from 'react'
import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer'
import Box from '@material-ui/core/Box'
import useStyles from './AppSidebar.style'
import { AppContext } from '../../components/utility/ContextProvider'

interface AppSidebarProps {
  variant?: string
  isCollapsed?: boolean
  setCollapsed?: () => boolean
}

const AppSidebar: React.FC<AppSidebarProps> = ({ variant = '' }) => {
  const classes = useStyles()
  const { navCollapsed, changeNavCollapsed } = useContext(AppContext)

  return (
    <>
      <Drawer
        classes={{
          root: clsx(variant),
          paper: clsx(variant),
        }}
        open={navCollapsed}
        onClose={() => changeNavCollapsed()}
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
