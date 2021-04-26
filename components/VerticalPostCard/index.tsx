import Image from 'next/image'
import React from 'react'
import Box from '@material-ui/core/Box'
import HashTag from '../HashTag'
import useStyles from './index.style'
import { PostCardProps } from '../../shared/types'
import { getDay, getMonth, getYear } from '../../helpers/timeUtils'

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
        src={thumbnail || 'https://picsum.photos/400/250'}
        width={500}
        height={350}
        layout="intrinsic"
      />
      <Box className={classes.titleContiner}>
        <Box className={classes.title}>{title}</Box>
        {content && <Box className={classes.content}>{content}</Box>}
        <Box className={classes.tags}>
          {tags && tags.map((tag) => <HashTag key={tag} tagName={tag} />)}
        </Box>
        <Box className={classes.createdAt}>
          <Box className={classes.day} component="span">
            {getDay(createdAt)}
          </Box>
          <Box className={classes.restDate} component="span">
            {`${getMonth(createdAt)}, ${getYear(createdAt)}`}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default VerticalPostCard
