import '../styles/globals.scss'
import '../styles/index.scss'

// https://nextjs.org/docs/basic-features/font-optimization
// https://fonts.google.com/specimen/Nunito
import { Nunito } from '@next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${nunito.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
    )
}
