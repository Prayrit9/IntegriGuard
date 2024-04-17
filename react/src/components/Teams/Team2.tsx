import React from "react";

function Team2() {
  return (
    <div className="h-[80vh] bg-[#D8C4B6] ">
      <h1 className="text-center font-bold text-[#213555] text-[5vh] pt-[10vh]">TEAM2</h1>
      <div className="text-center flex justify-center gap-[2vw]">
        <input placeholder="Enter the changes you made" className="w-[45vw] h-[4vh] p-[2vw] rounded-lg text-[#213555] bg-[#F5EFE7]"></input>
        <button className="p-[1vw] border-solid bg-[#213555] text-[#F5EFE7] rounded-lg">Submit</button>
      </div>
    </div>
  );
}

export default Team2;
