import React from 'react'
import Dmenu from './Dmenu'
import Link from 'next/link'
import { useRouter } from "next/navigation"

function Execution() {
  return (
    <div>
      <div className='bg-[#D8C4B6] flex items-center pt-[10vh] justify-center'>  
        <div className='flex'>
        <div className='w-[80vw] p-9 rounded-3xl backdrop-blur-60 bg-opacity-50 shadow-lg bg-[#F5EFE7]'>
          <h1 className='font-semibold text-[4vh] text-[#213555] text-center'>Track progress</h1> 
            <div className='flex justify-between py-[3vw]'>
              <Link href="/teams.js"><button className='rounded-lg bg-[#213555] py-[2vw] px-[5vw] hover:bg-[#335284] text-[#F5EFE7]'>team1</button></Link>
              <button className='rounded-lg bg-[#213555] py-[2vw] px-[5vw] hover:bg-[#335284] text-[#F5EFE7]'>team2</button>
              <button className='rounded-lg bg-[#213555] py-[2vw] px-[5vw] hover:bg-[#335284] text-[#F5EFE7]'>team3</button>
              <button className='rounded-lg bg-[#213555] py-[2vw] px-[5vw] hover:bg-[#335284] text-[#F5EFE7]'>team4</button>
            </div>
          </div>
          <div>

          </div>
        </div>
    </div>
    </div>
  )
}

export default Execution
