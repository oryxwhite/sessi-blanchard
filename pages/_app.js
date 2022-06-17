import '../styles/globals.css'
import Layout from './components/Layout.js'
import { motion } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <motion.div key={router.route} initial='pageInitial' animate='pageAnimate' variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        }
      }}>
        <Component {...pageProps} />
      </motion.div>
      
    </Layout>)
}

export default MyApp
