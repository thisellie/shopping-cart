import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Product from '../pages/Product'

describe('Product component', () => {
  it('Add product to cart', async () => {
    const user = userEvent.setup()

    render(<Product />)
    const button = screen.getByRole('button', { name: 'Add to cart' })

    await user.click(button)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/1/i)
  })
})
