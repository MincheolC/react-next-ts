import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import PostCard from '../../components/PostCard'
import MainPostCard from '../../components/MainPostCard'
import useStyles from './index.style'

const dummyPostCard = [
  {
    title: '[React] 02. createElement와 Component,render의 동작 원리',
    content:
      'Hi! I want to discuss with you how to manage Frontend architecture in large organizations. It feels to me that there are not many articles about this topic and it is not explained well.',
    thumbnail: 'https://picsum.photos/300/300',
    createdAt: 1602676800000,
    tags: ['react', 'front-end'],
  },
  {
    title: 'Frontend Architecture at Scale for Large Organizations',
    thumbnail: 'https://picsum.photos/310/310',
    createdAt: 1589198400000,
  },
  {
    title: '[React Props Cheatsheet: 10 Patterns You Should Know',
    thumbnail: 'https://picsum.photos/290/290',
    createdAt: 1615464000000,
  },
  {
    title: 'No Jira, No Cry',
    thumbnail: 'https://picsum.photos/280/280',
    createdAt: 1608811200000,
  },
]

const Home: React.FC = () => {
  const classes = useStyles()

  return (
    <Box className={classes.mainBanner}>
      <Grid container>
        <Grid item xs={8} className={classes.mainPost}>
          <MainPostCard
            title="Three Things in Life That Aren’t Worth The Effort"
            content="To be more efficient and happy, cut the waste and damaging activities from your life."
            tags={['Life']}
            createdAt={1608811200000}
          />
        </Grid>
        <Grid item xs={4} style={{ paddingLeft: '3%' }}>
          {dummyPostCard.map(
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
        <Grid item xs={12}></Grid>
      </Grid>
    </Box>
  )
}

export default Home
