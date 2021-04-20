import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tag: {
      padding: '3px 9px',
      border: `1px solid ${grey[300]}`,
      borderRadius: '2px',
      fontSize: Math.round(theme.typography.fontSize * 0.8),
    },
  })
)

export default useStyles
