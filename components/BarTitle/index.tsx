import React from 'react'
import Typography from '@material-ui/core/Typography'
import useStyles from './index.style'
import { Style } from '../../shared/types'

export enum BarTitleVariant {
  SHORT = 'short',
  FULL = 'full',
}

interface BarTitleProps {
  title?: string
  variant?: BarTitleVariant.SHORT | BarTitleVariant.FULL
  style?: Style
}

const BarTitle: React.FC<BarTitleProps> = ({
  title,
  variant = 'short',
  style,
}) => {
  const classes = useStyles({ isFull: BarTitleVariant.FULL === variant })
  return (
    <Typography className={classes.title} variant="h2" style={style}>
      {title}
    </Typography>
  )
}

export default BarTitle
