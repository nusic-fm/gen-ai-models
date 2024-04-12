import { ethers, network } from "hardhat";
import { GenAIModel, GenAIModelController, GenAIModelController__factory, GenAIModel__factory } from "../typechain-types";

async function main() {

  const [owner, addr1] = await ethers.getSigners();
  console.log("Network = ",network.name);

  const GenAIModel:GenAIModel__factory = await ethers.getContractFactory("GenAIModel");
  const genAIModel:GenAIModel = await GenAIModel.deploy("a","b","c",1);
  await genAIModel.deployed();

  console.log("GenAIModel deployed to:", genAIModel.address);


  const GenAIModelController:GenAIModelController__factory = await ethers.getContractFactory("GenAIModelController");
  const genAIModelController:GenAIModelController = await GenAIModelController.deploy();
  await genAIModelController.deployed();

  console.log("GenAIModelController deployed to:", genAIModelController.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
