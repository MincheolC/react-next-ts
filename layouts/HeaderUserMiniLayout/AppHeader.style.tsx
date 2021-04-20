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
    appTitle: {
      fontSize: Math.round(theme.typography.fontSize * 1.5),
      fontWeight: theme.typography.fontWeightBold,
      '& > .primary': {
        color: theme.palette.text.primary,
      },
    },
  })
)

export default useStyles
