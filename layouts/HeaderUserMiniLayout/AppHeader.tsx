/* eslint-disable react/jsx-no-target-blank */
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import GitHubIcon from '@material-ui/icons/GitHub'
import useStyles from './AppHeader.style'

interface Menu {
  name: string
  url: string
}

interface AppHeaderProps {
  title: string
  menu: Array<Menu>
}

const AppHeader: React.FC<AppHeaderProps> = (props) => {
  const classes = useStyles({ lastMenuIndex: props.menu.length })

  return (
    <>
      <AppBar className={classes.appBar} color="inherit">
        <Toolbar className={classes.toolBar}>
          <Box className={classes.appTitle}>{props.title}</Box>
          <Box className={classes.menuContainer}>
            {props.menu.map(({ name, url }) => (
              <Link key={name} href={url}>
                <a className={classes.menu}>{name}</a>
              </Link>
            ))}
            <a
              data-testid="myGithub"
              href="https://github.com/MincheolC"
              target="_blank"
            >
              <GitHubIcon style={{ fontSize: 30 }} />
            </a>
            <a
              data-testid="myNotion"
              href="https://www.notion.so/Charles-Dev-b2c65d1ae5ee4df99d4e24abe37eb38a"
              target="_blank"
            >
              <Image
                src="/images/notion-icon-96-black.png"
                width={31}
                height={31}
              />
            </a>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default AppHeader
