const hre = require("hardhat");

async function main()
{
  const entryPointContract = await hre.ethers.deployContract("EntryPoint");

  await entryPointContract.waitForDeployment();

  console.log(`EntryPoint deployed at: ${entryPointContract.target}`);
}
main().catch((error) =>
{
  console.error(error);
  process.exitCode = 1;
});
