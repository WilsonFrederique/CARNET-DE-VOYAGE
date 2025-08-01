import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import WhyChooseCard from './WhyChooseCard'

const WhyChoose = () => {
  return (
    <div className='pt-10 pb-20'>
        <SectionHeading heading='Why Choose Us' />

        <div className='grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20'>
          {/* Why Choose Card  */}
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" >
            <WhyChooseCard image="/images/Logo.png" title="Best Price Guarantee" />
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="150">
            <WhyChooseCard image="/images/Logo.png" title="Easy & Quick Booking" />
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
            <WhyChooseCard image="/images/Logo.png" title="Customer Care 24/7" />
          </div>
        </div>
    </div>
  )
}

export default WhyChoose