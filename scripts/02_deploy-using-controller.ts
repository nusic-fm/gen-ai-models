import { ethers, network } from "hardhat";
import { GenAIModel, GenAIModelController, GenAIModelController__factory, GenAIModel__factory } from "../typechain-types";
const addresses = require("./address.json");

async function main() {

  const [owner, addr1] = await ethers.getSigners();
  console.log("Network = ",network.name);

  const GenAIModelController:GenAIModelController__factory = await ethers.getContractFactory("GenAIModelController");
  const genAIModelController:GenAIModelController = await GenAIModelController.attach(addresses[network.name].genAIModelController);
  await genAIModelController.deployed();

  console.log("GenAIModelController Address :", genAIModelController.address);

  const txt = await genAIModelController.deployGenAIModelContract("abc","helloworldurl","hello",1);
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
