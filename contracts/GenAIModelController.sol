// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "hardhat/console.sol";
import "./GenAIModel.sol";


contract GenAIModelController is Ownable {
    using Strings for uint256;

    address public manager;
    modifier onlyOwnerOrManager() {
        require((owner() == msg.sender) || (manager == msg.sender), "Caller needs to be Owner or Manager");
        _;
    }

    event GenAIModelContractDeployed(address contractAddress, address deployer);

    constructor() {
        manager = 0x07C920eA4A1aa50c8bE40c910d7c4981D135272B;
    }

    function deployGenAIModelContract(string memory _userId, string memory _modelUrl, string memory _modelName, uint256 _noOfTracksGenerated) public {
        GenAIModel genAIModel = new GenAIModel(_userId, _modelUrl, _modelName, _noOfTracksGenerated);
        emit GenAIModelContractDeployed(address(genAIModel), msg.sender);
    }

    function setManager(address _manager) public onlyOwner {
        manager = _manager;
    }

}