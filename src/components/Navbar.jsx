import React from 'react'
import { links } from "../../Data";
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='w-full   left-0  fixed right-0 z-10 backdrop-blur hidden sm:block '>
      <div className=' flex justify-between items-center  mx-10 px-6 p-2 rounded-xl bg-white text-black border border-gray-300 my-2'> 
        <Link className='font-bold font-mono text-xl'>Clerk</Link>
        <ul  className='flex space-x-2 font-mono '>
            {links.map((nav)=>(
                <Link key={nav.id} >{nav.name}</Link>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar