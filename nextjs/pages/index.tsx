import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/styles.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rainier Atlantic Neighborhood</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="app">
          <div className="element element--bigmap"></div>
          <div className="element element--lilmap"></div>
          <div className="element element--guidemap"></div>
          <div className="element element--title"></div>
          <div className="element element--nav"></div>
          <div className="element element--info"></div>
      </main>

    </div>
  )
}