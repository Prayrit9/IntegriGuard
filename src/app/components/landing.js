import React from 'react'

function Landing() {
  return (
    <div className='h-[100vh] flex items-center gap-12 justify-center bg-[#D8C4B6] ]'>
        <div className='w-[40vw] p-9 rounded-3xl backdrop-blur-60 bg-opacity-50 shadow-lg bg-[#F5EFE7]'>
            <h1 className='font-semibold text-[3vh] text-[#213555]'>What is IntegriGuard?</h1>
            <p className='font-light text-[#213555] text-[1.8vh] pt-[2vh]'>IntegriGuard is a cutting-edge web application revolutionizing supply chain management
                through the seamless integration of blockchain technology. This innovative platform is designed
                to enhance transparency, traceability, and efficiency throughout the entire supply chain,
                offering a secure and decentralized solution for businesses</p>
            <p className='font-light text-[#213555] text-[1.8vh] pt-[4vh]'>
                IntegriGuard utilizes a decentralized blockchain network to record and verify every transaction and movement within the supply chain. This ensures a tamper-resistant 
                and transparent ledger, reducing the risk of fraud and errors.
            </p>
        </div>
        <div className='w-[40vw] p-9 rounded-3xl bg-[#F5EFE7] backdrop-blur-60 bg-opacity-50 shadow-lg'>
            <h1 className='font-semibold text-[#213555] text-[3vh]'>What do we offer?</h1>
            <p className='font-light text-[1.8vh] text-[#213555] pt-[2vh]'>IntegriGuard, a revolutionary web app for supply chain management, integrates blockchain
             for tamper-resistant transparency. Utilizing smart contracts, it automates processes, reducing costs and enhancing efficiency. Real-time visibility,
            supplier verification, and traceability empower businesses to make swift, informed decisions. The decentralized data storage ensures robust security
            against cyber threats, while cross-organizational collaboration fosters a seamless ecosystem. Customizable analytics offer actionable insights, making
            ChainGuard Pro the ultimate solution for modern businesses seeking a trustworthy, efficient, and transparent supply chain management platform.</p>
        </div>
    </div>
  )
}

export default Landing
