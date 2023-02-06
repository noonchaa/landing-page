import Contact from '@/components/contact'
import CTA from '@/components/CTA'
import Detail from '@/components/detail'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Testimony from '@/components/testimoni'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Noonchaa - Landing Page</title>
        <meta name="description" content="Contoh landing page oleh noonchaa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Hero />
        <CTA />
        <Detail image='nect' text='Best Quality Nect ' span='Seam' />
        <Detail image='sleve' text='Nice & Comfort ' span='Sleve' right={true} />
        <Detail image='front' text='Clear Print ' span='Logo' />
        <Testimony />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
