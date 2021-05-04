import { createStyles, makeStyles } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles(() =>
  createStyles({
    canvas: {
      background: grey[700],
    },
  })
)

export default useStyles
