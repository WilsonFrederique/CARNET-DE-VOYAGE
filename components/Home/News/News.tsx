import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import NewsCard from './NewsCard'

const News = () => {
  return (
    <div className='pt-16 pb-16'>
        {/* Section Heading  */}
        <SectionHeading heading='Exciting Travel News For You' />

        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20'>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                <NewsCard 
                    image="/images/1.jpg" 
                    title="Top 10 place to visit in Madagascar" 
                    date="19 Octobre 2024"
                />
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="150">
                <NewsCard 
                    image="/images/2.jpg" 
                    title="Top 10 place to visit in Pakistan" 
                    date="25 Novembre 2024"
                />
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
                <NewsCard 
                    image="/images/3.jpg" 
                    title="Top 10 place to visit in Bangladesh" 
                    date="28 Novembre 2024"
                />
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="450">
                <NewsCard 
                    image="/images/4.jpg" 
                    title="Top 10 place to visit in Canada Ville" 
                    date="01 Decembre 2024"
                />
            </div>
        </div>
    </div>
  )
}

export default News