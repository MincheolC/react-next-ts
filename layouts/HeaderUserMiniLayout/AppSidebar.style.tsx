import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sidebar: {
      zIndex: 100,
      width: '15rem',
      transition: 'all 0.5s ease',

      [theme.breakpoints.up('lg')]: {
        width: '4rem',
        position: 'fixed',
        left: 0,
      },

      [theme.breakpoints.up('xl')]: {
        width: '5rem',
      },
    },
    sidebarBg: {
      backgroundColor: '#313541',
    },
    sidebarStandard: {
      height: '100%',
      width: '100%',
      color: 'white',
      overflow: 'hidden',
    },
  })
)

export default useStyles
