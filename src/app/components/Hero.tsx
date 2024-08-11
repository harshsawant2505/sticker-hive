"use client"

import React from 'react'
import { Canvas, useThree } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei'
import { ThreeScene } from './ThreeScene'
import { useEffect, useRef } from 'react';
import { motion } from "framer-motion"
import Link from 'next/link';


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


// new heroes with 3d objects

const CustomOrbitControls = () => {


  const controlsRef = useRef<any>();
  const { camera } = useThree();


  // use to limit the rotation //
  useEffect(() => {
    if (controlsRef.current) {
      // Set default position
      camera.position.set(0.2, 6, 1);
      //  camera.position.set(1, 2, 3);

      // Limit rotation
      controlsRef.current.maxPolarAngle = Math.PI / 2; // Limit vertical rotation
      controlsRef.current.minPolarAngle = 0;
      controlsRef.current.maxAzimuthAngle = Math.PI / 4; // Limit horizontal rotation
      controlsRef.current.minAzimuthAngle = -Math.PI / 4;
      controlsRef.current.enableZoom = false;
    }
  }, [camera]);

  return <OrbitControls ref={controlsRef} />; // returning custom orbit control
};

function Hero() {


  return (
    <div className='overflow-hidden'>
      <motion.div className='bg-gradient-to-r from-black to-gray-900 sm:block hidden overflow-hidden m-0 h-screen relative text-white '
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}>

        <div className='w-full pt-24   gap-0 flex flex-col justify-center p-0 items-center  '>
          <h2 className='  text-[35px] p-0 m-0   '>CREATE WHAT YOU LIKE AT</h2>
          <h1 className=' leading-10 m-0 text-[180px]  py-12 font-extrabold '>STICKER HIVE</h1>
        </div>

        <motion.div className='object-contain absolute z-0 bottom-0 w-full '
          initial={{ y: "10vw", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", delay: 1 }}>
          <img src="/assets/cropped-mountain-2.png " className='w-full h-full scale-y-105 ' alt="" />
        </motion.div>

        <div className='z-10 absolute w-full bottom-32 flex borer justify-between items-center gap-7 px-16 pl-32 '>

          <motion.div className='w-[40%] m-0 h-fit '>
            <h1 className='font-bold   text-[27px] text-[#7F00FF]'>STICKER TEMPLATE GENERATOR</h1>
            <p className='text-[14px] my-2 text-gray-400'>
              Create your own stickers by selecting
              your character from our wide range of
              character combinations.
              Sticker Hive simplifies creating sticker templates by eliminating the need for complex editing software, making the process fast, easy, and accessible for everyone.
            </p>
            <Link href={"/create"} className="text-red mt-5 flex justify-center items-center hover:before:bg-redborder-[#7F00FF] relative h-[40px] rounded-lg w-36 overflow-hidden border border-[#7F00FF] bg-white px-3 text-[#7F00FF] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#7F00FF] before:transition-all before:duration-500 hover:text-white hover:shadow-[#7F00FF] hover:before:left-0 hover:before:w-full"><span className="relative z-10">Create Now</span></Link>
          </motion.div>


          <motion.div className=' absolute h-[600px]  right-10 w-[50%] '
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", delay: 0.5, stiffness: 80 }}>


            <Canvas  >
              <Environment preset='studio' />
              <CustomOrbitControls />
              <ThreeScene />
            </Canvas>

          </motion.div>


        </div>


      </motion.div>



      {/* Mobile view */}
      <motion.div className='bg-gradient-to-t from-black to-gray-900 sm:hidden flex flex-col gap-10 justify-center items-center  overflow-hidden m-0  bg-contain h-screen  text-white py-28 px-6 '
      initial={{y:75,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{type:"tween",duration:0.5}}>

     <div className='w-full'>
     <Carousel className=''>
        <CarouselContent>
          <CarouselItem><img src="/rgbKeyboard.png" alt="" className='w-full' /></CarouselItem>
          <CarouselItem><img src="/rgbKeyboard.png" alt="" className='w-full' /></CarouselItem>
          <CarouselItem><img src="/rgbKeyboard.png" alt="" className='w-full' /></CarouselItem>
        </CarouselContent>
      
      </Carousel>
     </div>
    

     
   

      {/* <h1 className=' leading-tight m-0 text-7xl   font-extrabold px-5'>Sticker Hive</h1> */}
      <div className=' z-10  order-2  '>
      <h1 className='font-bold   text-[27px] text-[#7F00FF]'>STICKER TEMPLATE GENERATOR</h1>
            <p className='text-md my-2 text-gray-400'>
              Create your own stickers by selecting
              your character from our wide range of
              character combinations.
              Sticker Hive simplifies creating sticker templates by eliminating the need for complex editing software.
            </p>
            <Link href={"/create"} className="text-red mt-5 flex justify-center items-center hover:before:bg-redborder-[#7F00FF] relative h-[40px] rounded-lg w-36 overflow-hidden border border-[#7F00FF] bg-white px-3 text-[#7F00FF] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#7F00FF] before:transition-all before:duration-500 hover:text-white hover:shadow-[#7F00FF] hover:before:left-0 hover:before:w-full"><span className="relative z-10">Create Now</span></Link>
        </div>
      
    {/* <div className='  w-full absolute bottom-0 z-0 scale-y-95 object-cover'>
         <img src="/assets/mobile-mountain.png " className=' w-full h-full  ' alt="" />
         </div>
    */}

     
           

   
     
      
   
     


      </motion.div>




    </div>
  )
}

export default Hero