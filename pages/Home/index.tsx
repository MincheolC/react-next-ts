import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import PostCard from '../../components/PostCard'
import useStyles from './index.style'

const dummyPostCard = [
  {
    title:
      '[React] 리액트를 처음부터 배워보자. — 02. React.createElement와 React.Component 그리고 ReactDOM.render의 동작 원리',
    thumbnail:
      'https://miro.medium.com/fit/c/100/100/1*AFDx1I-xmR3n4rx8w3H9bQ.jpeg',
    createdAt: 1602676800000,
  },
  {
    title: 'Frontend Architecture at Scale for Large Organizations',
    thumbnail:
      'https://miro.medium.com/fit/c/100/100/1*3SBcnBeW8twEfjFwNgR68w.png',
    createdAt: 1589198400000,
  },
  {
    title: '[React Props Cheatsheet: 10 Patterns You Should Know',
    thumbnail:
      'https://miro.medium.com/fit/c/100/100/1*9HWCUB20P-ix4vX0KYOceg.png',
    createdAt: 1615464000000,
  },
  {
    title: 'No Jira, No Cry',
    thumbnail:
      'https://miro.medium.com/fit/c/100/100/1*PcyJuNvS6jUBkkFkeqL1AA.png',
    createdAt: 1608811200000,
  },
]

const Home: React.FC = () => {
  const classes = useStyles()

  return (
    <Box className={classes.mainBanner}>
      <Grid container spacing={3}>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}>
          {dummyPostCard.map(({ title, thumbnail, createdAt }, index) => (
            <PostCard
              key={index}
              title={title}
              thumbnail={thumbnail}
              createdAt={createdAt}
            />
          ))}
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Box>
  )
}

export default Home
