import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Hero } from '../components/Hero'
import RegistrationForm from '../components/RegistrationForm'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DaisyUI RJSF</title>
        <meta name="description" content="A simple RJSF form implementation using DaisyUI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Hero heading='RJSF + TailwindCSS + DaisyUI' subheading='A simple proof of concept using RJSF with TailwindCSS and DaisyUI' />
    <RegistrationForm />
    </div>
  )
}

export default Home
