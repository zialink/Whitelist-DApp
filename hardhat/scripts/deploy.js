const { ethers } = require("hardhat");

async function main() {
  const whitelistContract = await ethers.getContractFactory("Whitelist");

  //deploy contract
  const deployedWhitelistContract = await whitelistContract.deploy(10);

  //Wait for it to finsih deploying
  await deployedWhitelistContract.deployed();

  //print address of the deployed contract in console
  //contract address: 0x2F722EEE4B805c9AC4591f5CCce30a387e53eC53
  console.log(
    "Whitelist Contract Address: ",
    deployedWhitelistContract.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(1);
    process.exit(1);
  });
