import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    appMain: {
      height: '100vh',
      position: 'relative',
    },
    mainContent: {
      flex: 1,
      paddingTop: '140px',
      display: 'flex',
      justifyContent: 'space-between',
    },
    mainContainer: {
      width: '100%',
    },
  })
)

export default useStyles
