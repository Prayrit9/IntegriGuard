import React from "react";
import { TextInput } from "@mantine/core";
import { useState } from "react";
import integriGuard from "../../../../hardhat/artifacts/contracts/integriGuard.sol/integriGuard.json";
import smartContractAddress from "../../smartContractAddress.json";
import { createWalletClient, custom, createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";
import { useAccount } from "wagmi";
// import { writeContract, createConfig } from '@wagmi/core'
// import { mainnet, sepolia } from '@wagmi/core/chains'

function Team1() {
  const [team1Data, setTeam1Data] = useState("");
  const handleInput = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    setTeam1Data(value);
  };

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
          onClick={() => addTeam1Data()}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Team1;
