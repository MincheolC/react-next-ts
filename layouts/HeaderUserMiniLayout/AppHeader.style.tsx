import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      boxShadow: 'none',
      borderBottom: `1px solid ${grey[300]}`,
      padding: '0 30px',
    },
    toolBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '90px',
    },
    appTitle: {
      fontSize: Math.round(theme.typography.fontSize * 2),
      fontWeight: theme.typography.fontWeightBold,
    },
    menuContainer: {
      display: 'flex',
      alignItems: 'center',
      '& > a': {
        margin: '0 6px',
        '&:first-of-type': {
          marginLeft: '20px',
        },
      },
    },
    menu: {
      fontSize: Math.round(theme.typography.fontSize * 1.3),
      fontWeight: theme.typography.fontWeightBold,
      margin: '0 10px',
    },
  })
)

export default useStyles
