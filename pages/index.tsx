import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { relative } from 'path'
import Navbar from './components/navbar'
import Hero from './components/hero'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-top py-2 mt-4">
      
      <Head>
        <title>Sessi Blanchard</title>
        <meta name="Sessi Blanchard" content="Sessi Blanchard Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Navbar />
      <Hero />

      
    </div>
    
  )
}

export default Home
