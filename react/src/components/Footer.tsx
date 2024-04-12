import React from 'react'
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className='w-full font-thin flex justify-between p-[4vh] bg-[#213555] text-white'>
      <div className='px-[5vw]'>
      <a href=''>Learn More</a><br/>
      <a href=''>About</a><br/>
      <a href=''>Contact us</a><br/>
      <a href=''>Connect wallet</a><br/>
    </div>
    <div className='px-[5vw]'>
     <a href=''>Our Helpline Number</a><br/>
     <a href=''>+918851066166</a><br/>
     <a href=''>integriguard@gmail.com</a><br/>
     <a href=''>join our newsletter</a><br/>
   </div>
   <div>
   IntegriGuard utilizes a decentralized blockchain<br/>
    network to record and verify every transaction and<br/>
    movement within the supply chain. This ensures a<br/>
    tamper-resistant and transparent ledger, reducing<br/>
    the risk of fraud and errors.
   </div>
   </div>
  )
}

export default Footer
