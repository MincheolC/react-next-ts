import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    appMain: {
      height: '100vh',
      position: 'relative',
      backgroundColor: '#fff',
    },
    mainContent: {
      flex: 1,
      paddingTop: 64,
      display: 'flex',
      justifyContent: 'center',
    },
    mainContainer: {
      width: '100%',
      maxWidth: 1192,
      margin: '0 64px',
    },
  })
)

export default useStyles
