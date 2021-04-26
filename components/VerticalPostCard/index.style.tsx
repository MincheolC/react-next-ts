import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: 'relative',
      width: '100%',
      height: '530px',
      display: 'flex',
      flexDirection: 'column',
      margin: '28px 0px',
    },
    titleContiner: {
      marginTop: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      wordBreak: 'break-all',
    },
    title: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: Math.round(theme.typography.fontSize * 1.5),
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
      position: 'absolute',
      bottom: 0,
      color: theme.palette.text.secondary,
    },
    day: {
      fontSize: Math.round(theme.typography.fontSize * 3.5),
      fontWeight: theme.typography.fontWeightLight,
    },
    restDate: {
      marginLeft: '10px',
      fontSize: Math.round(theme.typography.fontSize * 1.5),
      fontWeight: theme.typography.fontWeightLight,
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
