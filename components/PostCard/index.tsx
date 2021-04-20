import React from 'react'
import Box from '@material-ui/core/Box'
import HashTag from '../HashTag'
import { toPostDateString } from '../../helpers/timeUtils'
import useStyles from './index.style'

interface PostCardProps {
  title: string
  content?: string
  thumbnail?: string
  createdAt: number
  tags?: string[]
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  content,
  thumbnail,
  createdAt,
  tags,
}) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Box className={classes.titleContiner}>
        <Box className={classes.title}>{title}</Box>
        {content && <Box className={classes.content}>{content}</Box>}
        <Box className={classes.createdAt}>{toPostDateString(createdAt)}</Box>
        <Box className={classes.tags}>
          {tags && tags.map((tag) => <HashTag key={tag} tagName={tag} />)}
        </Box>
      </Box>
      {thumbnail && <img src={thumbnail} style={{ width: '35%' }} />}
    </Box>
  )
}

export default PostCard
