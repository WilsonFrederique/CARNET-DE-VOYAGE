import Image from 'next/image';
import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { FiMapPin, FiStar } from 'react-icons/fi';

type Props = {
    hotel: {
        id: number;
        image: string;
        name: string;
        location: string;
        rating: number;
        reviews: string;
        price: string;
    }
}

const HotelCard = ({hotel}:Props) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Image Container */}
        <div className='relative h-[320px] w-full cursor-pointer group overflow-hidden'>
            {/* Add to fav button - improved with hover effect */}
            <button className='absolute top-4 right-4 z-20 h-9 w-9 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-rose-100 hover:scale-110 transition-all duration-200'>
                <FaHeart className='w-4 h-4 text-rose-500' />
            </button>
            
            {/* Gradient Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10'></div>
            
            {/* Image */}
            <Image 
                src={hotel.image} 
                alt={hotel.name} 
                width={600} 
                height={400} 
                className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105' 
            />
        </div>
        
        {/* Content */}
        <div className='p-5'>
            <div className='flex justify-between items-start'>
                <h1 className='text-xl font-bold text-gray-900 hover:text-blue-600 cursor-pointer transition-colors duration-200 line-clamp-1'>
                    {hotel.name}
                </h1>
                {/* Optional: Add badge for special offers */}
                <span className='bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full ml-2'>
                    Popular
                </span>
            </div>
            
            <div className='flex items-center mt-2'>
                <FiMapPin className='text-gray-500 w-4 h-4 mr-1' />
                <p className='text-sm text-gray-600 font-medium'>
                    {hotel.location}
                </p>
            </div>
            
            {/* Rating */}
            <div className='flex items-center mt-4 space-x-3'>
                <div className='px-3 py-1.5 bg-blue-600 rounded-md font-bold text-white text-sm flex items-center'>
                    {hotel.rating}
                    <FiStar className='ml-1 w-3 h-3 fill-white' />
            </div>
            <p className='text-sm text-gray-700'>{hotel.reviews} reviews</p>
        </div>
        
        {/* Price & CTA */}
        <div className='mt-5 flex justify-between items-center'>
            <div>
                <p className='text-xs text-gray-500'>Starting from</p>
                <p className='text-xl font-bold text-blue-600'>
                    US${hotel.price}
                    <span className='text-sm font-normal text-gray-500'> /night</span>
                </p>
            </div>
            <button className='cursor-pointer px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors duration-200'>
                View Details
            </button>
        </div>
    </div>
</div>
  )
}

export default HotelCard