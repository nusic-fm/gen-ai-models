import { ethers, network } from "hardhat";
import { GenAIModel2, GenAIModel2__factory } from "../typechain-types";

async function main() {

  const [owner, addr1] = await ethers.getSigners();
  console.log("Network = ",network.name);

  const GenAIModel2:GenAIModel2__factory = await ethers.getContractFactory("GenAIModel2");
  const genAIModel2:GenAIModel2 = await GenAIModel2.deploy();
  await genAIModel2.deployed();

  console.log("GenAIModel2 deployed to:", genAIModel2.address);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
