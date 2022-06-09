import React from 'react'
import FirstBlock from '../components/FirstBlock'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SecondBlock from '../components/SecondBlock'

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <FirstBlock />
      <SecondBlock />
      <FirstBlock />
    </main>
  )
}

export default Home
