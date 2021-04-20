import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    titleContiner: {
      marginTop: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: Math.round(theme.typography.fontSize * 2),
    },
    content: {
      marginTop: '5px',
      color: theme.palette.text.secondary,
      fontSize: theme.typography.fontSize,
      overflow: 'hidden',
      wordBreak: 'break-all',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      '-webkit-line-clamp': 2 /* ellipsis line */,
      '-webkit-box-orient': 'vertical',
    },
    createdAt: {
      marginTop: 8,
      color: theme.palette.text.secondary,
    },
    tags: {
      marginTop: 8,
      '& > span:not(:first-child)': {
        marginLeft: '5px',
      },
    },
  })
)

export default useStyles
