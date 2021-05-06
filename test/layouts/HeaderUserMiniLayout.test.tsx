import React from 'react'
import { render, screen } from '../testUtils'
import HeaderUserMiniLayout from '../../layouts/HeaderUserMiniLayout'

describe('HeaderUserMiniLayout', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HeaderUserMiniLayout />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('navigators', () => {
    render(<HeaderUserMiniLayout />)
    expect(screen.getByText(/css/i).getAttribute('href')).toBe('/css')
    expect(screen.getByText(/react/i).getAttribute('href')).toBe('/')
    expect(screen.getByText(/flutter/i).getAttribute('href')).toBe('/')
    expect(screen.getByText(/typescript/i).getAttribute('href')).toBe('/')

    expect(screen.getByTestId('myNotion').getAttribute('href')).toBe(
      'https://www.notion.so/Charles-Dev-b2c65d1ae5ee4df99d4e24abe37eb38a'
    )
    expect(screen.getByTestId('myGithub').getAttribute('href')).toBe(
      'https://github.com/MincheolC'
    )
  })
})
