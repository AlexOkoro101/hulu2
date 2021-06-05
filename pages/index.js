import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alex Hulu </title>
        <meta name="description" content="Hulu clone by Alex Okoro" />
        <meta name="author" content="Alex Emeka Okoro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header></Header>

      {/* navbar */}
      <Navbar></Navbar>

      {/* results */}
    </div>
  )
}
