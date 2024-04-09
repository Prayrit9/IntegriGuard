import React from 'react'
import Image from 'next/image';
import { Button } from "../../../@/components/ui/button";
import logo from '../resources/logo.png'
import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function Navbar() {
  return (
    <>
    <div>
      <nav className='flex justify-center bg-[#F5EFE7] h-[10vh] gap-[37vh] items-center fixed w-full bg-opacity-50 backdrop-blur-sm'>
         <div className='justify-center text-left flex flex-col'><Image src={logo} height={40} width={40}/></div>

         <div className='flex gap-[5vw] ml-12 items-center'>
      
           <a href="/" className="text-[#213555] hover:text-[#4F709C]">Home</a>
              
           <Link href="/teams" className="text-[#213555] hover:text-[#4F709C]">Teams</Link>
         
           <a href="#" className="text-[#213555] hover:text-[#4F709C]">About</a>

           <a href="#" className="text-[#213555] hover:text-[#4F709C]">Contact Us</a>
        
         </div>
         <div className='flex items-center'>
         <button className='hover:bg-[#4F709C] rounded-lg p-1 bg-[#213555]'><h1 className='text-[#F5EFE7] text-sm'>Connect Wallet</h1></button>
         </div>
      </nav>
    </div>
    </>
  )
}



