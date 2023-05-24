import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import { About } from '../src/components/About'

test('About component', async () => {
  const { findAllByText } = render(<About />)
  
  expect(findAllByText('Eduardo Vilke')).resolves.toBeDefined()
})