import React, { useEffect, useState } from 'react'
import { SignInButton, SignOutButton, useClerk } from '@clerk/clerk-react';
import { links } from "../../Data";
import { Link, useNavigate } from 'react-router'
import { HiBars3BottomRight } from "react-icons/hi2";
import { RxCross1 } from 'react-icons/rx';
import gsap from 'gsap';


const Mobile = () => {


  const [isOpen , setisOpen ]=useState(false)
  

  const { isSignedIn } = useClerk()

  const handleClick=()=>{
    setisOpen(!isOpen)
  }

  const tl = gsap.timeline();

  useEffect(()=>{
if(isOpen) (
    tl.fromTo('.main1',{
      ease:'power4.out',
      opacity:0,
      stagger:0.1,
      y:-40,
    },{
      opacity:1,
      duration:0.5,
      ease:'power2.out',
      y:0,

    }
  )
    ),
    tl.fromTo('.main3',{
      x:-20,
      y:-20,
      opacity:0,
      stagger:0.2,
    },{
      x:0,
      y:0,
      opacity:1,
      stagger:0.2,
      animation:"power3.out",})

  },[isOpen])



  
  return (
    <div className='w-full left-0  fixed right-0 z-10 backdrop-blur block sm:hidden'>
      <div className=' flex justify-between mw-3xl mx-4 items-center px-6 p-2 rounded-xl bg-white text-black border border-gray-300 my-2 '> 
        <Link to={'/home'} className='font-bold font-mono text-xl'>Clerk</Link>
       
        <div className='flex items-center gap-5'>
           <div className='flex'>
            {
              isSignedIn ? (
                <SignOutButton><button className='border py-1 text-center px-5 font-mono border-gray-200 rounded-md  text-black cursor-pointer bg-linear-to-r from-gray-50 from-10% via-gray-200 via-30% to-gray-700' >Log Out</button></SignOutButton>
              )
              : (<SignInButton ><button className='border py-1 text-center px-5 font-mono border-gray-200 rounded-md  text-black cursor-pointer bg-linear-to-r from-gray-50 from-10% via-gray-200 via-30% to-gray-700' >Sign In</button></SignInButton>)
              }
            </div>
          {
            !isOpen ?
          <HiBars3BottomRight onClick={handleClick} className='text-black text-3xl  p-1 border rounded border-gray-300 cursor-pointer '/>
            : <RxCross1 onClick={handleClick} className='text-black text-3xl  p-1 border rounded border-gray-300 cursor-pointer '/>
          }
          </div>
      </div>
      {isOpen && 
      <div className='bg-white backdrop-blur-2xl z-10 border border-gray-300 flex mw-3xl main1 p-2 rounded mx-1 overflow-y-auto '>
        <ul  className='flex font-mono flex-col  justify-center p-10 w-full rounded gap-5 main2'>
                    {links.map((nav)=>(
                        <Link onClick={handleClick} className='main3' to={nav.path} key={nav.id} >{nav.name}</Link>
                    ))}
                    
                     { isSignedIn && <Link onClick={handleClick} to={'/dashboard'} className='main3 border py-1 text-center px-5 font-mono border-gray-400 rounded-md  text-black cursor-pointer' >Dashboard</Link>}

                </ul>
      </div>
      }
    </div>
  )
}

export default Mobile







//    https://fkpzv3p1-5173.uks1.devtunnels.ms/

//  <RxCross1 />

//   https://fkpzv3p1-5173.uks1.devtunnels.ms/