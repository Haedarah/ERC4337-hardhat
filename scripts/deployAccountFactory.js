const hre = require("hardhat");

async function main()
{
  const accountFactoryContract = await hre.ethers.deployContract("AccountFactory");

  await accountFactoryContract.waitForDeployment();

  console.log(`AccountFactory deployed at: ${accountFactoryContract.target}`);
}
main().catch((error) =>
{
  console.error(error);
  process.exitCode = 1;
});
