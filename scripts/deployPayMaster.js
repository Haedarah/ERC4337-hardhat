const hre = require("hardhat");

async function main()
{
  const paymasterContract = await hre.ethers.deployContract("Paymaster");

  await paymasterContract.waitForDeployment();

  console.log(`PayMaster deployed at: ${paymasterContract.target}`);
}
main().catch((error) =>
{
  console.error(error);
  process.exitCode = 1;
});
