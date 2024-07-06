"use client"

import React from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei'
import { ThreeScene } from './ThreeScene'
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CustomOrbitControls = () => {
    const controlsRef = useRef<any>();
    const { camera } = useThree();
  
    useEffect(() => {
      if (controlsRef.current) {
        // Set default position
        camera.position.set(0.2, 6, 1);
  
        // Limit rotation
        controlsRef.current.maxPolarAngle = Math.PI / 2; // Limit vertical rotation
        controlsRef.current.minPolarAngle = 0;
        controlsRef.current.maxAzimuthAngle = Math.PI / 4; // Limit horizontal rotation
        controlsRef.current.minAzimuthAngle = -Math.PI / 4;
        controlsRef.current.enableZoom = false;
      }
    }, [camera]);
 
    return <OrbitControls ref={controlsRef} />;
  };

function Hero() {
    
   
  return (
    <div className='bg-custom-gradient overflow-hidden h-screen relative z-50'>

        <div className='w-full pt-24   gap-0 flex flex-col justify-center p-0 items-center  '>
            <h2 className='  text-[35px] p-0 m-0   '>CREATE WHAT YOU LIKE AT</h2>
            <h1 className=' leading-10 m-0 lg:text-[180px] text-[100px] py-12 font-extrabold '>STICKER HIVE</h1>
        </div>

        <div className='object-contain absolute z-0 bottom-0 w-full '>
             <img src="/assets/cropped-mountain-2.png " className='w-full h-full scale-y-105 ' alt="" />
        </div>

        <div className='z-10 absolute w-full bottom-32 flex borer justify-between items-center gap-7 px-16 pl-32 '>
            <div className='w-[40%] m-0 '>
                <h1 className='font-bold   text-[27px] text-[#7F00FF]'>STICKER TEMPLATE  
                GENERATOR</h1>
                <p className='text-[14px] my-2 text-gray-400'>
                Create your own stickers by selecting 
                your character from our wide range of
                character combinations.Sticker Hive simplifies creating sticker templates by eliminating the need for complex editing software, making the process fast, easy, and accessible for everyone.
                </p>
                <button className='px-4 mt-3 py-2 bg-white text-black rounded-xl font-bold'>Create Now</button>
            </div>
           
                    {/* <img src="/assets/cropped_3d-kyboard.jpg" className='h-full w-full' alt="" />
                     */}
                  <div className=' absolute h-[600px]  right-10 w-[50%] '>

               
                        <Canvas >
                        <Environment preset='studio'/>
                        <CustomOrbitControls/>
                        <ThreeScene />
                        
                        </Canvas>
                </div>
          
            {/* <div className='w-[25%]'>
                <h1 className='font-semibold w-30 text-[20px] text-[#7F00FF]'>STICKER TEMPLATE  <br />
                GENERATOR</h1>
                <p className='text-[15px] my-2'>
                Create your own stickers by selecting 
                your character from our wide range of
                character combinations.
                </p>
                <button className='px-4 mt-3 py-2 bg-white text-black rounded-xl'>Create Now</button>
            </div> */}
        </div>
       

    </div>
  )
}

export default Hero