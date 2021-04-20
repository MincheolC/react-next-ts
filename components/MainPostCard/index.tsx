import Image from 'next/image'
import React from 'react'
import Box from '@material-ui/core/Box'
import HashTag from '../HashTag'
import { toPostDateString } from '../../helpers/timeUtils'
import useStyles from './index.style'

interface MainPostCardProps {
  title: string
  content?: string
  thumbnail?: string
  createdAt: number
  tags?: string[]
}

const PostCard: React.FC<MainPostCardProps> = ({
  title,
  content,
  thumbnail,
  createdAt,
  tags,
}) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Image
        src={thumbnail || 'https://picsum.photos/1200/800'}
        width={1200}
        height={800}
      />
      <Box className={classes.titleContiner}>
        <Box className={classes.title}>{title}</Box>
        {content && <Box className={classes.content}>{content}</Box>}
        <Box className={classes.createdAt}>{toPostDateString(createdAt)}</Box>
        <Box className={classes.tags}>
          {tags && tags.map((tag) => <HashTag key={tag} tagName={tag} />)}
        </Box>
      </Box>
    </Box>
  )
}

export default PostCard
