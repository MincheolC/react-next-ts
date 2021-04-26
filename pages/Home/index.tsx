import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import BarTitle, { BarTitleVariant } from '../../components/BarTitle'
import PostCard from '../../components/PostCard'
import MainPostCard from '../../components/MainPostCard'
import HorizontalCardList from '../../components/HorizontalCardList'
import useStyles from './index.style'
import { getLatest } from '../../helpers/utils'

const dummyPostCard = [
  {
    title: '[React] 02. createElement와 Component,render의 동작 원리',
    content:
      'Hi! I want to discuss with you how to manage Frontend architecture in large organizations. It feels to me that there are not many articles about this topic and it is not explained well.',
    thumbnail: 'https://picsum.photos/400/400',
    createdAt: 1602676800000,
    tags: ['React', 'Front-end'],
  },
  {
    title: 'Frontend Architecture at Scale for Large Organizations',
    thumbnail: 'https://picsum.photos/410/410',
    createdAt: 1589198400000,
    tags: ['SW-engineering', 'Front-end'],
  },
  {
    title: '[React Props Cheatsheet: 10 Patterns You Should Know',
    thumbnail: 'https://picsum.photos/401/401',
    createdAt: 1615464000000,
    tags: ['React', 'Front-end'],
  },
  {
    title: 'No Jira, No Cry',
    thumbnail: 'https://picsum.photos/402/402',
    createdAt: 1608811200000,
    tags: ['Tools'],
  },
  {
    title: '[React Props Cheatsheet: 10 Patterns You Should Know',
    thumbnail: 'https://picsum.photos/403/403',
    createdAt: 1615664000000,
    tags: ['React', 'Front-end'],
  },
]

const Home: React.FC = () => {
  const classes = useStyles()

  return (
    <Box className={classes.mainBanner}>
      <Grid container>
        <Grid item xs={8} className={classes.mainPost}>
          <BarTitle variant={BarTitleVariant.SHORT} />
          <MainPostCard
            title="Three Things in Life That Aren’t Worth The Effort"
            content="To be more efficient and happy, cut the waste and damaging activities from your life."
            tags={['Life']}
            createdAt={1608811200000}
          />
        </Grid>
        <Grid item xs={4} style={{ paddingLeft: '3%' }}>
          <BarTitle title="Latest Post" />
          {getLatest(dummyPostCard, 4).map(
            ({ title, thumbnail, content, createdAt, tags }, index) => (
              <>
                <PostCard
                  key={index}
                  title={title}
                  content={content}
                  thumbnail={thumbnail}
                  tags={tags}
                  createdAt={createdAt}
                />
                <Divider variant="middle" />
              </>
            )
          )}
        </Grid>
        <Grid item xs={12} className={classes.posts}>
          <BarTitle
            title="Front End"
            variant={BarTitleVariant.FULL}
            style={{ paddingLeft: '0px' }}
          />
          <HorizontalCardList
            cards={getLatest(dummyPostCard).filter((card) =>
              card.tags.includes('Front-end')
            )}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
