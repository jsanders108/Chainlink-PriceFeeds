
const hre = require("hardhat");

async function main() {

  const PriceFeeds = await hre.ethers.getContractFactory("PriceFeeds");
  const priceFeeds = await PriceFeeds.deploy();

  await priceFeeds.deployed();

  console.log(
    `PriceFeeds contract deployed to ${priceFeeds.address}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
