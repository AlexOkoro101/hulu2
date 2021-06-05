import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home({results}) {
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
      <Results results={results}></Results>
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
  .then((res) => res.json())

  return {
    props: {
      results: request.results,
    }
  }
}
