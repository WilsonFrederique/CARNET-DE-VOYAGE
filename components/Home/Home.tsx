import React from 'react'
import Hero from './Hero/Hero'
import Destination from './Destination/Destination'
import Hotel from './Hotel/Hotel'
import WhyShoose from './WhyChoose/WhyChoose'

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <Hero />
        <Destination />
        <Hotel />
        <WhyShoose />
    </div>
  )
}

export default Home