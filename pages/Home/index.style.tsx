import { createStyles, makeStyles } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles(() =>
  createStyles({
    mainBanner: {
      display: 'flex',
      '& > div': {
        flex: 1,
      },
    },
    mainPost: {
      paddingRight: '4% !important',
      borderRight: `1px solid ${grey[300]}`,
    },
  })
)

export default useStyles
