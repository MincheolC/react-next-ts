import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flex: '1 1 auto',

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
    img: {
      width: 100,
      height: 100,
    },
    title: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.fontSize,
    },
    createdAt: {
      marginTop: 8,
      color: theme.palette.text.secondary,
    },
  })
)

export default useStyles
