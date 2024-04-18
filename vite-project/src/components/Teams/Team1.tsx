import React from "react";
// import { TextInput } from "@mantine/core";
import { useState } from "react";
import integriGuard from "../../../../hardhat/artifacts/contracts/integriGuard.sol/integriGuard.json";
import smartContractAddress from "../../smartContractAddress.json";
import { createWalletClient, custom, createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";
import { useAccount } from "wagmi";
// import { writeContract, createConfig } from '@wagmi/core'
// import { mainnet, sepolia } from '@wagmi/core/chains'
import { useWriteContract, useReadContract } from "wagmi";
import { Web3 } from "web3";

function Team1() {
  const [team1Data, setTeam1Data] = useState("");
  // const [hours, setGHours] = useState(0);

  // const [minutes, setMinutes] = useState(0);
  // const [seconds, setSeconds] = useState(0);

  const handleInput = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    setTeam1Data(value);
  };

  const abi = integriGuard.abi;

  const { address } = useAccount();

  const publicClient = createPublicClient({
    chain: sepolia,
    transport: http(),
  });

  const walletClient = createWalletClient({
    chain: sepolia,
    transport: custom((window as any).ethereum),
  });

  const addTeam1Data = async () => {
    await walletClient.writeContract({
      address: smartContractAddress.smartContractAddress as `0x${string}`,
      abi: integriGuard.abi,
      functionName: "setStatus",
      args: [team1Data, "team1"],
      account: address as `0x${string}`,
      chain: sepolia,
    });
  };

  const addTeam1Dataaa = async () => {
    const { request } = await publicClient.simulateContract({
      address: smartContractAddress.smartContractAddress as `0x${string}`,
      abi: integriGuard.abi,
      functionName: "setStatus",
      args: [team1Data, "team1"],
      account: address,
      chain: sepolia,
    });
    await walletClient.writeContract(request);
  };

  // const config = createConfig({
  //   chains: [sepolia],
  //   transports: {
  //     [sepolia.id]: http(),
  //   },
  // })

  // const addTeam1Dataaa = async () => {
  //   const result = await writeContract(config, {
  //     abi,
  //     address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  //     functionName: 'transferFrom',
  //     args: [
  //       '0xd2135CfB216b74109775236E36d4b433F1DF507B',
  //       '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  //       123n,
  //     ],
  //   })
  // };
  const { writeContract } = useWriteContract();

  const result = useReadContract({
    abi,
    address: smartContractAddress.smartContractAddress as `0x${string}`,
    functionName: "getData",
    args: ["team1"],
    account: address,
    chainId: sepolia.id,
  });
  const data1 = result.data;

  const result2 = useReadContract({
    abi,
    address: smartContractAddress.smartContractAddress as `0x${string}`,
    functionName: "getAddress2",
    args: ["team1"],
    account: address,
    chainId: sepolia.id,
  });
  const data2 = result2.data;
  // let time: any;

  const result3 = useReadContract({
    abi,
    address: smartContractAddress.smartContractAddress as `0x${string}`,
    functionName: "getTime",
    args: ["team1"],
    account: address,
    chainId: sepolia.id,
  });
  const data3 = result3.data;

  return (
    <div className="h-[80vh] bg-[#D8C4B6] ">
      <h1 className="text-center font-bold text-[#213555] text-[5vh] pt-[10vh]">
        TEAM1
      </h1>
      <div className="text-center flex justify-center gap-[2vw]">
        <input
          placeholder="Enter the changes you made"
          className="w-[45vw] h-[4vh] p-[2vw] rounded-lg text-[#213555] bg-[#F5EFE7]"
          value={team1Data}
          name="team1"
          id="team1"
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
              args: [team1Data, "team1"],
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

          const  time = Number(
              JSON.parse(
                JSON.stringify(val, (key, value) => {
                  return typeof value === "bigint" ? value.toString() : value;
                })
              )
            );

            const date = new Date(time);

            // Extract hours, minutes, and seconds
            // setGHours(date.getHours());
            // setMinutes(date.getMinutes())
            // setSeconds(date.getSeconds())
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            return (
              <h1>
                {hours} Hrs : {minutes} Min : {seconds} Seconds
              </h1>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Team1;
