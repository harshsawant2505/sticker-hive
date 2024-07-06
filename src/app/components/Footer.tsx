import React from 'react'
import Link from 'next/link'
import { FaFacebook,FaTwitter, FaLinkedin,FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    
    <div className='flex justify-center items-center h-[60vh]'>

    <div className='flex justify-around w-screen '>
        <div  className=''>
            <p className='text-2xl p-1'>Contact Support</p>
            <p className='p-1'>+91 1234567890</p>
            <p className='text-2xl p-1 mt-4'>Email Support</p>
            <p className='p-1'>stickerhive@gmail.com</p>
        </div>
        <div className='flex flex-col'>
            <p className='p-2 text-bold text-2xl'>For Customers</p>
            <p className='p-2'><Link href='/'>Terms and Conditions</Link></p>
            <p className='p-2'><Link href='/'>About Us</Link></p>
            <p className='p-2'><Link href='/'>Carrers</Link></p>
            <p className='p-2'><Link href='/'>Contact Us</Link></p>
            <p className='p-2'><Link href='/'>FAQ</Link></p>
            <p className='p-2'><Link href='/'>Privacy Policy</Link></p>
        </div>
        <div className=''>
            <p>Follow Us On</p>
            <div className='flex gap-4 p-2 m-1 '><FaFacebook/><p><Link href="/">Facebook</Link></p></div>
            <div className="flex gap-4 p-2 m-1 "><FaTwitter/><p><Link href="/">Twitter</Link></p></div>
            <div className="flex gap-4 p-2 m-1 "><FaLinkedin/><p><Link href="/">LinkedIn</Link></p></div>
            <div className="flex gap-4 p-2 m-1 "><FaInstagram/><p><Link href="/">Instagram</Link></p></div>
            
        </div>
    </div>
    </div>
    
  )
}

export default Footer