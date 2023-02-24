import 'swiper/css';
import 'swiper/css/autoplay';
import '@/styles/index.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
