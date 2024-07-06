import React from 'react'
function Hero() {
  return (
    <div className='bg-custom-gradient overflow-hidden h-[650px] relative'>

        <div className='w-full pt-16   gap-0 flex flex-col justify-center p-0 items-center  '>
            <h2 className='  text-[35px] p-0 m-0   '>CREATE WHAT YOU LIKE AT</h2>
            <h1 className=' leading-10 m-0 lg:text-[180px] text-[100px] py-12 font-extrabold border border-black'>STICKER HIVE</h1>
        </div>

        <div className='object-contain absolute z-0 bottom-0 w-full '>
             <img src="/assets/cropped-mountain-2.png " className='w-full h-full scale-y-105 ' alt="" />
        </div>

        <div className='z-10 absolute w-full bottom-24 flex justify-between items-center gap-7 px-16 '>
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
            <div className='object-contain w-[48%] shadow-[0_8px_10px_rgba(127,_0,_255,_0.7)]'>
                    <img src="/assets/cropped_3d-kyboard.jpg" className='h-full w-full' alt="" />

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