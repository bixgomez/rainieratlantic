import Head from 'next/head'
import '../styles/globals.scss'
import '../styles/index.scss'

// https://nextjs.org/docs/basic-features/font-optimization
// https://fonts.google.com/specimen/Nunito
import { Nunito } from '@next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/*https://betterprogramming.pub/common-mistakes-to-avoid-while-switching-to-nextjs-c06a45abd3bc*/}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <style jsx global>{`
        html {
          font-family: ${nunito.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
    )
}
