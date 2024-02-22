const hre = require("hardhat");

async function main()
{
    const [signer0]=await hre.ethers.getSigners();
    const signature=signer0.signMessage(hre.ethers.getBytes(hre.ethers.id("wee")));

    const tst = await hre.ethers.getContractFactory("Test");
    const test= await tst.deploy(signature);

    console.log("address0",await signer0.getAddress());
}


main().catch((error) =>
{
  console.error(error);
  process.exitCode = 1;
});
