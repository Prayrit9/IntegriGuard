import Image from "next/image";
import React from "react";
import Navbar from './components/navbar';
import Landing from './components/landing';
import Working from './components/working';
import Execution from './components/execution';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Working />
      <Execution />
    </div>
  );
}
