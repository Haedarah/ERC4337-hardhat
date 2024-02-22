const hre = require("hardhat");

const entryPointAddress="0x5FbDB2315678afecb367f032d93F642f64180aa3";

async function main()
{
  const code= await hre.ethers.provider.getCode(entryPointAddress);
  //code now has the ABI of the contract entryPoint.
  console.log(code);
}
main().catch((error) =>
{
  console.error(error);
  process.exitCode = 1;
});
