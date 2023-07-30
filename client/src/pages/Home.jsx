import React from 'react'
import Firm from '../components/Firm'
import Globe from '../components/Globe'
import Latest from '../components/Latest'
import Offer from '../components/Offer'
import Talk from '../components/Talk'
import TopHome from '../components/TopHome'
const Home = () => {
  return (
    <div>
      <TopHome />
      <Offer />
      <Globe />
      <Firm />
      <Latest />
      <Talk />
    </div>
  )
}

export default Home
