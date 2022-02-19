import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home | Luke Johnson</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Luke Johnson" />
        <p className="description">
          software engineer
        </p>
      </main>

      <Footer />
    </div>
  )
}
