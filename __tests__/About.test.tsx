import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import { About } from '../src/components/About'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from '../src/hooks/useTheme'

test('About component', async () => {
  const { findAllByText } = render(
    <NextIntlClientProvider 
      locale="pt-BR"
      timeZone="America/Sao_Paulo"
      messages={ (await import(`../src/dictionaries/pt-BR.json`)).default}
    >
      <ThemeProvider>
        <About />
      </ThemeProvider>
    </NextIntlClientProvider>
  )
  
  expect(findAllByText('Eduardo Vilke')).resolves.toBeDefined()
})