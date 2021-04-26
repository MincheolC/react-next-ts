import Image from 'next/image'
import React from 'react'
import Box from '@material-ui/core/Box'
import HashTag from '../HashTag'
import useStyles from './index.style'
import { PostCardProps } from '../../shared/types'

const VerticalPostCard: React.FC<PostCardProps> = ({
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
        src={thumbnail || 'https://picsum.photos/400/400'}
        width={400}
        height={400}
      />
      <Box className={classes.titleContiner}>
        <Box className={classes.title}>{title}</Box>
        {content && <Box className={classes.content}>{content}</Box>}
        <Box className={classes.tags}>
          {tags && tags.map((tag) => <HashTag key={tag} tagName={tag} />)}
        </Box>
        <Box className={classes.createdAt}>{createdAt}</Box>
      </Box>
    </Box>
  )
}

export default VerticalPostCard
