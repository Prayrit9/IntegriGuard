const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const integriGuardContractFactory = await hre.ethers.getContractFactory(
    "integriGuard"
  );
  const integriGuardContract = await integriGuardContractFactory.deploy();


  try {
    fs.writeFileSync(
      "../vite-project/src/smartContractAddress.json",
      JSON.stringify({ smartContractAddress: integriGuardContract.target })
    );
  } catch (error) {
    console.error(error);

    throw error;
  }

  console.log(`
    Contract :  timestamp ${unlockTime} deployed to ${integriGuardContract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
