import React from "react";
import { NavLink } from "react-router-dom";

export default function Teams() {
  return (
    <div className="h-[100vh] flex-row items-center justify-between bg-[#D8C4B6]">
    <div className="flex justify-center py-[2vw] gap-[5vw] pt-[15vh]">
                <NavLink
                  to="/teams/team1"
                  className="flex bg-opacity-40 shadow-lg hover:bg-[#e6dccf] bg-[#F5EFE7] h-[20vw] w-[35vw] items-center justify-center rounded-2xl text-[#213555] text-[5vh]"
                >
                  <div>TEAM1</div>
                </NavLink>
                <NavLink
                  to="/teams/team2"
                  className="flex bg-opacity-40 shadow-lg bg-[#F5EFE7] hover:bg-[#e6dccf] h-[20vw] w-[35vw] items-center justify-center rounded-2xl text-[#213555] text-[5vh]"
                >
                  TEAM2
                </NavLink>
      </div>
      <div className="flex justify-center py-[2vw] gap-[5vw]">
                <NavLink
                  to="/teams/team3"
                  className="flex bg-opacity-40 shadow-lg bg-[#F5EFE7] hover:bg-[#e6dccf] h-[20vw] w-[35vw] items-center justify-center rounded-2xl text-[#213555] text-[5vh]"
                >
                  TEAM3
                </NavLink>
                <NavLink
                  to="/teams/team4"
                  className="flex bg-opacity-40 shadow-lg bg-[#F5EFE7] hover:bg-[#e6dccf] h-[20vw] w-[35vw] items-center justify-center rounded-2xl text-[#213555] text-[5vh]"
                >
                  TEAM4
                </NavLink>
              </div>
              </div>
  );
}
