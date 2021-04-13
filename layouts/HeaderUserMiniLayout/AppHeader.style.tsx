import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      boxShadow: 'none',
      maxHeight: '64px',
    },
    appTitle: {
      fontSize: Math.round(theme.typography.fontSize * 1.5),
      fontWeight: theme.typography.fontWeightBold,
      '& > .primary': {
        color: theme.palette.success.dark,
      },
    },
  })
)

export default useStyles
