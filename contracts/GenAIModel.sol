// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "hardhat/console.sol";


contract GenAIModel is Ownable {
    using Strings for uint256;

    string public userId;
    string public modelUrl;
    string public modelName;
    uint256 public noOfTracksGenerated;
    address public manager;

    modifier onlyOwnerOrManager() {
        require((owner() == msg.sender) || (manager == msg.sender), "Caller needs to be Owner or Manager");
        _;
    }

    event NoOfTracksUpdated(uint256 _oldNoOfTracks, uint256 _newNoOfTracks);

    constructor(string memory _userId, string memory _modelUrl, string memory _modelName, uint256 _noOfTracksGenerated) {
        manager = 0x07C920eA4A1aa50c8bE40c910d7c4981D135272B;
        userId = _userId;
        modelUrl = _modelUrl;
        modelName = _modelName;
        noOfTracksGenerated = _noOfTracksGenerated;
    }

    function updateUserId(string memory _userId) public onlyOwnerOrManager {
        userId = _userId;
    }

    function updateModelUrl(string memory _modelUrl) public onlyOwnerOrManager {
        modelUrl = _modelUrl;
    }

    function updateModelName(string memory _modelName) public onlyOwnerOrManager {
        modelName = _modelName;
    }

    function updateNoOfTracksGenerated(uint256 _noOfTracksGenerated) public onlyOwnerOrManager {
        noOfTracksGenerated = _noOfTracksGenerated;
    }

    function setManager(address _manager) public onlyOwner {
        manager = _manager;
    }

}