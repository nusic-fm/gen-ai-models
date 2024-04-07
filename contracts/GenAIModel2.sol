// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "hardhat/console.sol";

contract GenAIModel2 is Ownable {
    using Strings for uint256;

    struct UserModel {
        address userAddress;
        string userId;
        string modelUrl;
        string modelName;
        string youtubeUrl;
        address creator;
        uint256 size;
    }

    mapping(uint256 => UserModel) public userModels;
    address public manager;
    uint256 public counter;

    modifier onlyOwnerOrManager() {
        require((owner() == msg.sender) || (manager == msg.sender), "Caller needs to be Owner or Manager");
        _;
    }

    event GenAIModelCreated(uint256 counter, address userAddress, string _userId, string _modelUrl, string _modelName, string _youtubeUrl, address _creator, uint256 _size);

    constructor() {
        manager = 0x07C920eA4A1aa50c8bE40c910d7c4981D135272B;
    }

    function createGenAIModel(string memory _userId, string memory _modelUrl, string memory _modelName, string memory _youtubeUrl, address _creator, uint256 _size) public {
        UserModel storage model = userModels[++counter];
        //require(model.userAddress == address(0), "UserModel already exists");
        model.userAddress = msg.sender;
        model.userId = _userId;
        model.modelUrl = _modelUrl;
        model.modelName = _modelName;
        model.youtubeUrl = _youtubeUrl;
        model.creator = _creator;
        model.size = _size;

        emit GenAIModelCreated(counter, msg.sender, _userId, _modelUrl, _modelName, _youtubeUrl, _creator, _size);
    }

    function setManager(address _manager) public onlyOwner {
        manager = _manager;
    }

}