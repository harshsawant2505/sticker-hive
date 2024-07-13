'use client'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import toast, { Toaster } from "react-hot-toast";
import NewFooter from '../components/NewFooter';



function Contact() {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [data, setdata] = useState("")

    const [loading, setLoading] = useState(false);

    async function handleSubmit() {
        setLoading(true)
        try {
            const response = await axios.post("/api/contact",{
                name: name,
                email: email,
                data: data
            })
            console.log(response.data)
           response.data.success? toast.success(response.data.message):toast.error(response.data.message)
           setLoading(false)
            
        } catch (error:any) {
            console.log(error.message)
            toast.error(error.message)
            setLoading(false)
            
        }
          
    }

  return (
    <div className='bg-gray-900 '>
        <Toaster/>
        <Navbar />
    <div className='flex justify-center items-center sm:py-0 py-10 '>
        
        <div className="container h-fit py-20 max-h-screen  w-screen bg-gray-900 text-white flex justify-center items-center ">
        <div className="gradientCont w-4/5 h-4/5 flex justify-center items-center md:rounded-3xl md:bg-gradient-to-b md:from-purple-700 md:to-purple-700 ">
            <div
                className= "cont2 bg-black w-full h-full flex flex-col gap-5 sm:p-0 p-5 justify-center items-center md:flex md:justify-start rounded-3xl md:flex-row md:m-1 md:p10 md:border-t-2 md:border-t-violet-800 md:border-b-2 md:to-purple-700">
                <div className="     relative p-1 m-5 w-full md:w-1/3 md:p-2 md:m-2 ">
                    <div className="feedback text-4xl mb-10 p-1 md:text-5xl font-bold md:m-2 md:p-2">Contact Us</div>
                    <div className="name">
                        <textarea onChange={(e)=>{setname(e.target.value)}} className="text-black w-full sm:w-[120%] rounded-2xl p-2 m-1 resize-none" name="" id=""
                            placeholder="Enter your name"></textarea>
                    </div>
                    <div className="  w-full">
                        <textarea onChange={(e)=>{setemail(e.target.value)}} className="text-black w-full sm:w-[120%] rounded-2xl p-2 m-1 resize-none" name="" id=""
                            placeholder="Enter a valid email address"></textarea>
                    </div>
                    <div className="yourMessage">
                        <textarea onChange={(e)=>{setdata(e.target.value)}} className="text-black w-full sm:w-[120%] rounded-2xl p-2 m-1 h-28 md:h-44 resize-none" name="" id=""
                            placeholder="Your message"></textarea>
                    </div>
                    <div className='flex justify-start'>

                    <button onClick={handleSubmit}
                        className="flex justify-center submit bg-gradient-to-b from-violet-800 to-pink-500 text-white p-2 w-fit m-2 rounded-full  ">
                         {loading?"Submitting...": "Submit"}
                    </button>
                    </div>
                </div>

               
               
            </div>
           
        </div>
    </div>

    </div>
    <NewFooter />
    </div>
  )
}

export default Contact