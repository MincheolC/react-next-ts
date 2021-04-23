import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      display: (props: { isFull: boolean }) =>
        props.isFull ? 'block' : 'inline-block',
      minWidth: '180px',
      padding: '18px 25px 10px 15px',
      borderTop: '4px solid #000',
      fontSize: theme.typography.fontSize * 2,
      fontWeight: theme.typography.fontWeightBold,
    },
  })
)

export default useStyles
