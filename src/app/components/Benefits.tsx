
"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { delay, motion, useAnimation, useInView } from 'framer-motion'


// import { Canvas } from 'react-three-fiber'
// import { Environment, OrbitControls } from '@react-three/drei'
// import { ThreeScene } from './ThreeScene'
function Benefits() {

    const ref = useRef(null)
    const inview = useInView(ref,{once:true});
    const control = useAnimation()
    
    useEffect(() => {
      if(inview) {  
          control.start("visible");
      }
    
    }, [inview])
    
       
  return (
    <div  className=' w-full flex bg-gradient-to-b from-black text-white to-gray-900 py-10 lg:px-16 px-2 justify-center items-center gap-20 '>


                <motion.div whileHover={{scale:1.1}} className='lg:block hidden w-[50%]'><Image  src='/rgbKeyboard.png' width={300} height={300} alt="rgbKeyboard" className='w-full' /></motion.div>

                <motion.div ref={ref} className='flex gap-4 justify-center items-center w-full px-7'
                variants={
                    {
                        hidden: {opacity: 0, y: 75},
                        visible: {opacity: 1, y: 0},
                    }
                } 
                initial={"hidden"}
                animate = {control}
                transition={{delay:0.12,duration:0.5}}>
                    <div className='p-0 w-full'>
                        <p className='font-extrabold text-5xl lg:m-4'>BENEFITS OF <span className='text-[#7F00FF]'> STICKER HIVE</span></p>
                       
                        <p className='lg:w-[60%] w-fit lg:text-lg text-lg  px-0 my-7 lg:m-4'>Sticker Hive offers a user-friendly platform that makes creating sticker templates simple and efficient, eliminating the need for complex editing software. With its intuitive interface, users can easily create customized stickers without requiring technical skills or investing time in learning new tools.</p>
                        <div className='flex lg:gap-0 gap-4 lg:mt-0 mt-4 flex-wrap items-start'>
                            <div className='border lg:m-4 border-white w-[350px] h-fit p-3 lg:p-4 rounded-xl'>
                                <p className='text-xl font-bold'><span className='text-[#7F00FF]'>Ease</span> of use</p>
                                <p className=''>With an intuitive interface, Sticker Hive is designed for users of all skill levels. There&apos;s no need for prior technical knowledge or design experience.</p>
                            </div>
                            <div className='border lg:m-4 border-white w-[350px] h-fit p-3 lg:p-4 rounded-xl'>
                                <p className='text-xl font-bold'><span className='text-[#7F00FF]'>Time</span>-Saving</p>
                                <p>Sticker Hive significantly reduces the time required to create sticker templates. Traditional design software often involves a steep learning curve.</p>
                            </div>
                            <div className='border lg:m-4 border-white w-[350px] h-fit p-3 lg:p-4 rounded-xl'>
                                <p className='text-xl text-[#7F00FF] font-bold'>Customization</p>
                                <p>One of the standout features of Sticker Hive is its extensive library of templates and design options. Users can choose from various pre-designed templates</p>
                            </div>
                        </div>
                    </div >
                </motion.div>
            
            </div>
  )
}

export default Benefits