import React from 'react'
import Hero from './Hero/Hero'
import Destination from './Destination/Destination'
import Hotel from './Hotel/Hotel'
import WhyShoose from './WhyChoose/WhyChoose'
import Reviews from './Reviews/Reviews'
import News from './News/News'

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <Hero />
        <Destination />
        <Hotel />
        <WhyShoose />
        <Reviews />
        <News />
    </div>
  )
}

export default Home