import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Teams from "./components/Teams";
import Team1 from "./components/Teams/Team1";
import Team2 from "./components/Teams/Team2";
import Team3 from "./components/Teams/Team3";
import Team4 from "./components/Teams/Team4";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import '@mantine/core/styles.css';
// import { MantineProvider } from '@mantine/core';
import { http, createConfig ,WagmiProvider,WagmiConfig} from 'wagmi';
import {  sepolia } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' 
import { createWeb3Modal,defaultWagmiConfig } from "@web3modal/wagmi";
import { Web3ModalProvider } from "./Web3ModalProvider";

export default function App() {
 

 const config = createConfig({
  chains: [ sepolia],
  transports: {
    [sepolia.id]: http(),
  },
})

const queryClient = new QueryClient() 


const projectID='92742c5b456beb5ba2914b724a1ee434'

const chains=[sepolia]
// const wagmiConfig=defaultWagmiConfig({projectID,chains,metadata:{name:"interiguard"}})
// createWeb3Modal({
//   wagmiConfig: config,
//   projectID,
//   enableAnalytics: true, // Optional - defaults to your Cloud configuration
//   enableOnramp: true // Optional - false as default
// })
  return (
    // <WagmiProvider config={config}> 
    //       <QueryClientProvider client={queryClient}> 
<Web3ModalProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/team1" element={<Team1 />} />
        <Route path="/teams/team2" element={<Team2 />} />
        <Route path="/teams/team3" element={<Team3 />} />
        <Route path="/teams/team4" element={<Team4 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </Web3ModalProvider>
    // </QueryClientProvider> 

    // </WagmiProvider > 
  );
}
