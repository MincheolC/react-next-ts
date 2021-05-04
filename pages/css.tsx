import React from 'react'
import HeaderUserMiniLayout from '../layouts/HeaderUserMiniLayout'
import { CircleAnimation, SnowFlake } from '../components/Css'

const CssPage: React.FC = () => {
  return (
    <HeaderUserMiniLayout>
      <CircleAnimation />
      <SnowFlake />
    </HeaderUserMiniLayout>
  )
}

export default CssPage
