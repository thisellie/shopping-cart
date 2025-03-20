import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../pages/Home'

describe('Home page', () => {
  it('renders the home page', () => {
    render(<Home />)
    expect(screen.getByRole('heading').textContent).toMatch(`Welcome to thisellie's shop`)
  })
})
