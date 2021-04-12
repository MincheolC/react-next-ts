import React from 'react'
import HeaderUserMiniLayout from '../layouts/HeaderUserMiniLayout'
import Home from './old_index'

const MainPage: React.FC = () => {
  return (
    <HeaderUserMiniLayout>
      <Home />
    </HeaderUserMiniLayout>
  )
}

export default MainPage
