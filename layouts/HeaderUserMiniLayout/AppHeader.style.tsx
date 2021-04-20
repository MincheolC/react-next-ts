import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      boxShadow: 'none',
      maxHeight: '64px',
      borderBottom: `1px solid ${grey[300]}`,
      padding: '0 55px',
    },
    toolBar: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    appTitle: {
      fontSize: Math.round(theme.typography.fontSize * 1.5),
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
      fontSize: Math.round(theme.typography.fontSize),
      fontWeight: theme.typography.fontWeightBold,
      margin: '0 10px',
    },
  })
)

export default useStyles
