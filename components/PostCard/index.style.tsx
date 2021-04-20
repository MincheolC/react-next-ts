import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flex: '1 1 auto',
      minHeight: '140px',

      [theme.breakpoints.up('lg')]: {
        padding: '0px 16px',
      },

      '&:not(:last-child)': {
        paddingBottom: 32,
      },
    },
    titleContiner: {
      height: '100%',
      width: '100%',
      marginRight: theme.spacing(5),
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: Math.round(theme.typography.fontSize * 1.5),
    },
    content: {
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
