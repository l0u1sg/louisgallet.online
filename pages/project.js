import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Project</title>
        <meta name="description" content="Project page | Louis Gallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br />
      <br />
      <main className={styles.main}>
        <h1 className={styles.title}>
          📚 My Project
        </h1>

        <p className={styles.description}>
          🚀 Here are all my projects, some are on GitHub, others are private 🔒
        </p>
        

        <div className={styles.grid}>
          <a href="https://github.com/l0u1sg/corona-online" className={styles.card}>
            <h2>⚠️ Corona Online &rarr;</h2>
            <p>A website that displays all corona virus statistics live </p>
          </a>

          <a href="https://github.com/AideJeune" className={styles.card}>
            <h2>👥 Aide Jeune &rarr;</h2>
            <p>CTO of a French server against bullying </p>
          </a>

          <a
            href="https://github.com/l0u1sg/kard-bank-api"
            className={styles.card}
          >
            <h2>💳 Kard Bank API &rarr;</h2>
            <p>(in progress) creation of a NodeJS package to communicate with the Kard API</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>

          © Louis Gallet - 2021

      </footer>
    </div>
  )
}
