import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from './components/hero'


const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-top py-2 mt-4">
      
      <Head >
        <title>Sessi Blanchard</title>
        <meta name="Sessi Blanchard" content="Sessi Blanchard Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <a href='https://twitter.com/SessiBlanchard'><img src='/twitter.png' width='50px' height='50px' className='mb-20'></img></a>

    </div>
  )
}

export default Home
