import React from 'react'
import Box from '@material-ui/core/Box'
import useStyles from './index.style'

interface HastTagProps {
  tagName: string
}

const HashTag: React.FC<HastTagProps> = ({ tagName }) => {
  const classes = useStyles()
  return (
    <Box className={classes.tag} component="span">
      #{tagName}
    </Box>
  )
}

export default HashTag
