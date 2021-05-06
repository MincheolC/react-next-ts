import React from 'react'
import { render } from '../testUtils'
import MainPage from '../../pages/index'

jest.mock('next/image', () => ({ src }) => <img src={src} />)

describe('Main page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<MainPage />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
