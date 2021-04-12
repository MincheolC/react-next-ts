import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appTitle: {
      fontSize: Math.round(theme.typography.fontSize * 1.5),
      fontWeight: theme.typography.fontWeightBold,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    menuIcon: {
      width: 35,
      height: 35,
    },
  })
)

export default useStyles
