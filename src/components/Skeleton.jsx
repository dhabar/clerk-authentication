import React from 'react'

const Skeleton = () => {
  return (
    <div className='flex flex-col'>
      
      <div className='w-full h-screen flex border border-gray-300 gap-7 rounded shadow-xl shadow-gray-600 p-10 '>
        <div className='w-12 h-12  bg-linear-to-r from-gray-400 to-gray-900 rounded-full  animate-pulse'></div>
        <div className='flex flex-col gap-1'>
        <div className='w-40 h-6  bg-linear-to-r from-gray-400 to-gray-900 rounded-full animate-pulse'></div>
        <div className='w-40 h-4  bg-linear-to-r from-gray-400 to-gray-900 rounded-full animate-pulse'></div>
        </div>
      </div>

    </div>
  )
}

export default Skeleton