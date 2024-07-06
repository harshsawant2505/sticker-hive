import Link from 'next/link'
import React from 'react'
import { FaUser } from "react-icons/fa";
function navbar() {
  return (
  
   
        <nav className='w-full text-white  h-14 py-8 flex justify-between items-center px-16 bg-custom-gradient  border-b-[1px]   border-[#1F2937] ' >
          {/* <div className='flex gap-10 items-center'>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
          </div> */}

          <div>
            <h2 className='font-extrabold'>STICKER HIVE</h2>

          </div>

          <div className='flex gap-12 items-center'>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
            <Link href={"/contact"}>Contact</Link>
            <FaUser className='text-4xl bg-gray-400 rounded-full px-2 ml-10 hover:cursor-pointer py-0' />
          </div>
          
        </nav>

      
  )
}

export default navbar