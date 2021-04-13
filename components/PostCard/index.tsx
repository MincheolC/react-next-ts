import React from 'react'
import Box from '@material-ui/core/Box'
import { toPostDateString } from '../../helpers/timeUtils'
import useStyles from './index.style'

interface PostCardProps {
  title: string
  content?: string
  thumbnail?: string
  createdAt: number
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  content,
  thumbnail,
  createdAt,
}) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Box className={classes.titleContiner}>
        <Box className={classes.title}>{title}</Box>
        {content && <Box>{content}</Box>}
        <Box className={classes.createdAt}>{toPostDateString(createdAt)}</Box>
      </Box>
      {thumbnail && (
        <a>
          <img src={thumbnail}></img>
        </a>
      )}
    </Box>
  )
}

export default PostCard
