import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appMain: {
      height: '100vh',
      position: 'relative',
      backgroundColor: theme.palette.background.default,
    },
    mainContent: {
      flex: 1,
      paddingTop: 64,
      display: 'flex',
      flexDirection: 'row',
    },
    mainContainer: {
      width: '100%',
    },
  })
)

export default useStyles
