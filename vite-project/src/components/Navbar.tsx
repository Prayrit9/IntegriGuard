import React from "react";
// import Image from 'next/image';
import logo from "../assets/logo.png";
// import { ConnectKitButton } from "connectkit";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div>
        <nav className="flex justify-center bg-[#F5EFE7] h-[10vh] gap-[37vh] items-center fixed w-full bg-opacity-50 backdrop-blur-sm">
          <NavLink to="/" className="justify-center text-left flex flex-col">
            <img src={logo} height={40} width={40} />
          </NavLink>

          <div className="flex  ml-12 items-center">
            <ul className="flex flex-row gap-[5vw] ">
              <li>
                <NavLink to="/" className="text-[#213555] hover:text-[#4F709C]">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/teams"
                  className="text-[#213555] hover:text-[#4F709C]"
                >
                  Teams
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-[#213555] hover:text-[#4F709C]"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-[#213555] hover:text-[#4F709C]"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center bg-black ">
            {/* <ConnectKitButton /> */}<w3m-button/>
          </div>
        </nav>
      </div>
    </>
  );
}
