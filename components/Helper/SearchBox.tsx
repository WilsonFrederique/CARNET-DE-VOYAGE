import React from 'react'
import { FaCalendarWeek, FaMap } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'

const SearchBox = () => {
  return (
    <div className='bg-white backdrop-blur-sm rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
    items-center justify-center gap-6 mt-8 w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%]
    shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-white/20'>
      
      {/* Location Field */}
      <div className="group flex items-center space-x-4 p-3 rounded-xl transition-all duration-200 hover">
        <div className="p-3 rounded-full bg-blue-100/80 text-blue-600 group-hover:bg-blue-200 transition-colors">
          <FaMap className='w-5 h-5' />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">Location</p>
          <input 
            type="text" 
            placeholder='Where are you going?' 
            className='w-full outline-none bg-transparent placeholder:text-gray-500 text-gray-800 font-medium text-sm'
          />
        </div>
      </div>

      {/* Start Date Field */}
      <div className="group flex items-center space-x-4 p-3 rounded-xl transition-all duration-200 hover">
        <div className="p-3 rounded-full bg-blue-100/80 text-blue-600 group-hover:bg-blue-200 transition-colors">
          <FaCalendarWeek className='w-5 h-5' />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">Start Date</p>
          <input 
            type="date" 
            className='w-full outline-none bg-transparent text-gray-800 font-medium text-sm'
          />
        </div>
      </div>

      {/* End Date Field */}
      <div className="group flex items-center space-x-4 p-3 rounded-xl transition-all duration-200 hover">
        <div className="p-3 rounded-full bg-blue-100/80 text-blue-600 group-hover:bg-blue-200 transition-colors">
          <FaCalendarWeek className='w-5 h-5' />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">End Date</p>
          <input 
            type="date" 
            className='w-full outline-none bg-transparent text-gray-800 font-medium text-sm'
          />
        </div>
      </div>

      {/* Guest Field */}
      <div className="hover group flex items-center space-x-4 p-3 rounded-xl transition-all duration-200 cursor-pointer">
        <div className="p-3 rounded-full bg-blue-100/80 text-blue-600 group-hover:bg-blue-200 transition-colors">
          <FaUserGroup className='w-5 h-5' />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">Guests</p>
          <p className="text-gray-800 font-medium text-sm">1 Guest, 1 Room</p>
        </div>
      </div>
    </div>
  )
}

export default SearchBox