import React from 'react'
import Typography from '@material-ui/core/Typography'
import useStyles from './index.style'

export enum BarTitleVariant {
  SHORT = 'short',
  FULL = 'full',
}

interface BarTitleProps {
  title?: string
  variant?: BarTitleVariant.SHORT | BarTitleVariant.FULL
}

const BarTitle: React.FC<BarTitleProps> = ({ title, variant = 'short' }) => {
  const classes = useStyles({ isFull: BarTitleVariant.FULL === variant })
  return (
    <Typography className={classes.title} variant="h2">
      {title}
    </Typography>
  )
}

export default BarTitle
