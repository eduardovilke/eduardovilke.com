import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@hooks/useTheme'
import { NextIntlClientProvider } from 'next-intl'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  
  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="America/Sao_Paulo"
      messages={pageProps.messages}
    >
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}

export default MyApp
