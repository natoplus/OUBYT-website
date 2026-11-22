import type { AppProps } from 'next/app'
import PageScrollReveal from '@/components/PageScrollReveal'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageScrollReveal />
      <Component {...pageProps} />
    </>
  )
}
