import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    mainBanner: {
      display: 'flex',
      justifyContent: 'center',
      '& > div': {
        flex: 1,
      },
    },
  })
)

export default useStyles
