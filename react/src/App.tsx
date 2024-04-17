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
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

export default function App() {
  return (
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
    
  );
}
