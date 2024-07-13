"use client"

import { AnimatePresence, motion, useCycle, Variants } from 'framer-motion';
import Link from 'next/link'
import React, { useState } from 'react'
import { FaHome, FaPhone, FaUser } from "react-icons/fa";
import { FaBurger, FaNoteSticky, FaPencil, FaX } from 'react-icons/fa6';
import { MenuToggle } from './MenuButton';
import { CiMenuBurger } from 'react-icons/ci';

function Navbar() {



const [menu,setmenu] = useState(false)
const menuButtonStyle = {
  marginLeft: "2rem"
};

  return (
    
        <div className='overflow-hidden'>
        <nav className='w-full hidden bg-gradient-to-r from-black to-gray-900  text-white  h-14 py-8 lg:flex justify-between items-center px-16 bg-custom-gradient  border-b-[1px]   border-[#1F2937] ' >
          {/* <div className='flex gap-10 items-center'>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
          </div> */}

          <div>
            <Link className='h-full w-fit flex items-center mt-1' href={'/'}><img className='w-48 ' src='/assets/stickerHive.png'/></Link>

          </div>

          <div className='flex gap-12 items-center'>
            <Link  className='hover:text-[#7F00FF]' href={"/"} >Home</Link>
            <Link className='hover:text-[#7F00FF]' href={"/create"}>Create</Link>
            <Link className='hover:text-[#7F00FF]' href={"/about"}>About</Link>
            <Link className='hover:text-[#7F00FF]' href={"/contact"}>Contact</Link>
            <FaUser className='text-4xl bg-gray-400 rounded-full px-2 ml-10 hover:cursor-pointer py-0' />
          </div>
          
        </nav>

        <nav className='w-full flex fixed text-white  h-14 py-8 lg:hidden z-20  bg-gray-900  justify-between items-center px-8 bg-custom-gradient  border-b-[1px]   border-[#1F2937] ' >
        <Link className='h-full w-fit flex items-center mt-1' href={'/'}><img className='w-48 ' src='/assets/stickerHive.png'/></Link>
              <AnimatePresence>
              {menu &&
              
                <motion.div className='w-screen z-0 h-[60vh] bg-black border-b-[1px] border-t-[1px] border-gray-700 fixed top-[64.1px]   left-0'
                variants={{
                  open: {opacity: 1,  },
                  closed: { opacity: 0, },
                }}
                initial="closed"
                animate="open"
                transition={{duration: 0.2}}
                exit={{opacity:0}}
                >

                  <div className='flex flex-col gap-5 px-8 h-full justify-center items-center '>
                    <motion.a  className='w-full m-0 h-16 border rounded-lg px-6 flex justify-between items-center   ' href={"/"}
                     variants={{
                      start: {scale:0},
                      end: {scale:1}
                     }}
                     initial={"start"}
                     animate={"end"}
                     transition={{type:"spring",duration:0.5}}
                     >Home <FaHome /></motion.a>

                  <motion.a className='w-full h-16 border rounded-lg px-6 flex justify-between items-center   ' href={"/create"}
                     variants={{
                      start: {scale:0},
                      end: {scale:1}
                     }}
                     initial={"start"}
                     animate={"end"}
                     transition={{type:"spring",duration:0.5,delay:0.1}}>Create <FaPencil /></motion.a>

                    <motion.a className='w-full h-16 border rounded-lg px-6 flex justify-between items-center   ' href={"/about"}
                     variants={{
                      start: {scale:0},
                      end: {scale:1}
                     }}
                     initial={"start"}
                     animate={"end"}
                     transition={{type:"spring",duration:0.5,delay:0.2}}>About <FaNoteSticky/></motion.a>

                  

                    <motion.a className='w-full h-16 border rounded-lg px-6 flex justify-between items-center   ' href={"/contact"}
                     variants={{
                      start: {scale:0},
                      end: {scale:1}
                     }}
                     initial={"start"}
                     animate={"end"}
                     transition={{type:"spring",duration:0.5,delay:0.3}}>Contact <FaPhone /></motion.a>
                  </div>
                  
                </motion.div>
              }
              </AnimatePresence>
             <button onClick={()=>{setmenu(!menu)}}>{menu?<FaX color='text-xl'/>:<CiMenuBurger className=' text-xl ' />}</button>
        </nav>  
        </div>
      
  )
}

export default Navbar

function variant(arg0: {}, arg1: {}) {
  throw new Error('Function not implemented.');
}
