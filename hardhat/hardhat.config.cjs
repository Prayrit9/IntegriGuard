// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.24",
// };



// // require("@nomiclabs/hardhat-waffle");
// require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox");


require("dotenv").config()  ;
const {VITE_INFURA_KEY,PRIVATE_KEY}=process.env;


module.exports = {
  solidity: "0.8.20",
  defaultNetwork:"sepolia",
  
  networks:{
    hardhat:{},
    sepolia:{
      url:`https:sepolia.infura.io/v3/${VITE_INFURA_KEY}`,
      accounts: [PRIVATE_KEY]  ,
      chainID: 11155111  ,
      timeout: 600000,
    },
  }
};