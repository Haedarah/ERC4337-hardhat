const hre = require("hardhat");

const ACCOUNT_ADDR="0xCafac3dD18aC6c6e92c921884f9E4176737C052c";
const ENTRYPOINT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const PAYMASTER_ADDRESS = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

async function main()
{
  const account = await hre.ethers.getContractAt("Account",ACCOUNT_ADDR);
  const count= await account.count();
  console.log(count);

  console.log("account balance ",await hre.ethers.provider.getBalance(ACCOUNT_ADDR));

  const EP = await hre.ethers.getContractAt("EntryPoint",ENTRYPOINT_ADDRESS);
  console.log("Account balance on Entry Point ",await EP.balanceOf(ACCOUNT_ADDR));
  console.log("Paymaster balance on Entry Point ",await EP.balanceOf(PAYMASTER_ADDRESS));

}
main().catch((error) =>
{
  console.error(error);
  process.exitCode = 1;
});
