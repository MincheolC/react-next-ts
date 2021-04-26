import React from 'react'
import Grid from '@material-ui/core/Grid'
import VerticalPostCard from '../VerticalPostCard'
import { PostCardProps } from '../../shared/types'

interface HorizontalCardListProps {
  cards: Array<PostCardProps>
}

const HorizontalCardList: React.FC<HorizontalCardListProps> = ({ cards }) => {
  return (
    <Grid container spacing={10}>
      {cards.map(({ title, createdAt, content, thumbnail, tags }) => (
        <Grid key={createdAt} item xs={3}>
          <VerticalPostCard
            title={title}
            content={content}
            thumbnail={thumbnail}
            tags={tags}
            createdAt={createdAt}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default HorizontalCardList
