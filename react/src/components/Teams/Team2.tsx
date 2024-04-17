import React from "react";
import { useState } from "react";

function Team2() {
  const [team2Data, setTeam2Data] = useState("");
  const handleInput = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    setTeam2Data(value);
  };
  return (
    <div className="h-[80vh] bg-[#D8C4B6] ">
      <h1 className="text-center font-bold text-[#213555] text-[5vh] pt-[10vh]">TEAM2</h1>
      <div className="text-center flex justify-center gap-[2vw]">
        <input placeholder="Enter the changes you made" className="w-[45vw] h-[4vh] p-[2vw] rounded-lg text-[#213555] bg-[#F5EFE7]"
         value={team2Data}
         name="team2"
         id="team2"
         onChange={handleInput}></input>
        <button className="p-[1vw] border-solid bg-[#213555] text-[#F5EFE7] rounded-lg">Submit</button>
      </div>
    </div>
  );
}

export default Team2;
