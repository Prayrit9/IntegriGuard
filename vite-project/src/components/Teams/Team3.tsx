import React from "react";
import { useState } from "react";
import integriGuard from "../../../../hardhat/artifacts/contracts/integriGuard.sol/integriGuard.json";
import smartContractAddress from "../../smartContractAddress.json";
import { createWalletClient, custom, createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";
import { useAccount } from "wagmi";
import { useWriteContract, useReadContract } from "wagmi";
import { Web3 } from "web3";

function Team3() {
  const [team3Data, setTeam3Data] = useState("");
  const handleInput = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    setTeam3Data(value);
  };
  const abi = integriGuard.abi;
  const { address } = useAccount();

  const { writeContract } = useWriteContract();

  const result = useReadContract({
    abi,
    address: smartContractAddress.smartContractAddress as `0x${string}`,
    functionName: "getData",
    args: ["team3"],
    account: address,
    chainId: sepolia.id,
  });
  const data1 = result.data;

  const result2 = useReadContract({
    abi,
    address: smartContractAddress.smartContractAddress as `0x${string}`,
    functionName: "getAddress2",
    args: ["team3"],
    account: address,
    chainId: sepolia.id,
  });
  const data2 = result2.data;
  // let time: any;

  const result3 = useReadContract({
    abi,
    address: smartContractAddress.smartContractAddress as `0x${string}`,
    functionName: "getTime",
    args: ["team3"],
    account: address,
    chainId: sepolia.id,
  });
  const data3 = result3.data;

  return (
    <div className="h-[80vh] bg-[#D8C4B6] ">
      <h1 className="text-center font-bold text-[#213555] text-[5vh] pt-[10vh]">
        TEAM3
      </h1>
      <div className="text-center flex justify-center gap-[2vw]">
        <input
          placeholder="Enter the changes you made"
          className="w-[45vw] h-[4vh] p-[2vw] rounded-lg text-[#213555] bg-[#F5EFE7]"
          value={team3Data}
          name="team3"
          id="team3"
          onChange={handleInput}
        ></input>
        <button
          className="p-[1vw] border-solid bg-[#213555] text-[#F5EFE7] rounded-lg"
          onClick={() =>
            writeContract({
              abi,
              address:
                smartContractAddress.smartContractAddress as `0x${string}`,
              functionName: "setStatus",
              args: [team3Data, "team3"],
              account: address,
            })
          }
        >
          Submit
        </button>
      </div>
      <div className="text-center flex flex-row gap-[100px] justify-center mt-24">
        <div className="flex flex-col gap-[10px]">
          {data2?.map((val, id) => {
            console.log("pppppppppppp : ", val);

            return <h1>{val}</h1>;
          })}
        </div>
        <div className="flex flex-col gap-[10px]">
          {data1?.map((val, id) => {
            console.log("awefaefaef : ", Web3.utils.hexToAscii(val));

            return <h1>{Web3.utils.hexToAscii(val)}</h1>;
          })}
        </div>

        <div className="flex flex-col gap-[10px]">
          {data3?.map((val, id) => {
            console.log(`ttttttttttt : 
   
   
   ${JSON.parse(
     JSON.stringify(val, (key, value) => {
       return typeof value === "bigint" ? value.toString() : value;
     })
   )}`);

            const time = Number(
              JSON.parse(
                JSON.stringify(val, (key, value) => {
                  return typeof value === "bigint" ? value.toString() : value;
                })
              )
            );

            const date = new Date(0);
            console.log("eeeeeeeeeeeeeeee", date.setUTCSeconds(time));

            // Extract hours, minutes, and seconds
            // setGHours(date.getHours());
            // setMinutes(date.getMinutes())
            // setSeconds(date.getSeconds())
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            return (
              <h1>
                {hours} Hour : {minutes} Min : {seconds} Seconds {time}
              </h1>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Team3;
