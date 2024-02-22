require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "localhost",
  solidity:
  {
    version: "0.8.24",
    settings:
    {
      optimizer:
      {
        enabled: true,
        runs:1000,
      }
    }
  }
  };
