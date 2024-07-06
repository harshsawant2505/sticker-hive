"use client"

import React from 'react'
import Image from 'next/image'

// import { Canvas } from 'react-three-fiber'
// import { Environment, OrbitControls } from '@react-three/drei'
// import { ThreeScene } from './ThreeScene'
function Benefits() {
  return (
    <div className=' w-screen flex bg-gradient-to-b justify-around  items-center gap-4 m-10'>

    <div className=' w-screen flex  justify-around  items-center gap-4 m-10'>
                <div className=''><Image src='/rgbKeyboard.png' width={300} height={300} alt="rgbKeyboard" className='w-full' /></div>

                <div className='flex gap-4 justify-center items-center w-2/3'>
                    <div className=''>
                        <p className='font-extrabold text-5xl m-4'>BENEFITS OF</p>
                        <p className='text-[#7F00FF] font-extrabold text-5xl m-4'>STICKER HIVE</p>
                        <p className='max-w-[40vw] m-4'>Sticker Hive offers a user-friendly platform that makes creating sticker templates simple and efficient, eliminating the need for complex editing software. With its intuitive interface, users can easily create customized stickers without requiring technical skills or investing time in learning new tools.</p>
                        <div className='flex gap-4 flex-wrap items-start'>
                            <div className='border m-4 border-white max-w-[400px] p-2 rounded-xl'>
                                <p className='text-xl font-bold'>Ease of use</p>
                                <p>With an intuitive interface, Sticker Hive is designed for users of all skill levels. There&apos;s no need for prior technical knowledge or design experience.</p>
                            </div>
                            <div className='border m-4 border-white max-w-[400px] p-2 rounded-xl'>
                                <p className='text-xl font-bold'>Time-Saving</p>
                                <p>Sticker Hive significantly reduces the time required to create sticker templates. Traditional design software often involves a steep learning curve and lengthy design processes.</p>
                            </div>
                            <div className='border m-4 border-white max-w-[400px] p-2 rounded-xl'>
                                <p className='text-xl font-bold'>Customization</p>
                                <p>One of the standout features of Sticker Hive is its extensive library of templates and design options. Users can choose from various pre-designed templates</p>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
            </div>
  )
}

export default Benefits