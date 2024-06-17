import { ethers, network } from "hardhat";
import { GenAIModel2, GenAIModel2__factory } from "../typechain-types";
const addresses = require("./address.json");

async function main() {

  const [owner, addr1] = await ethers.getSigners();
  console.log("Network = ",network.name);

  const GenAIModel2:GenAIModel2__factory = await ethers.getContractFactory("GenAIModel2");
  const genAIModel2:GenAIModel2 = await GenAIModel2.attach(addresses[network.name].genAIModel2);
  await genAIModel2.deployed();

  console.log("GenAIModel2 Address to:", genAIModel2.address);

  const txt = await genAIModel2.createGenAIModel("user1","modelURL","shortname","youtubeurl", owner.address, 1);
  console.log("txt.hash = ",txt.hash);
  const receipt = await txt.wait();
  console.log("receipt = ",receipt);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
