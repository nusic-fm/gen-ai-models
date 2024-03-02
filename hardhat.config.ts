import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@nomiclabs/hardhat-ethers'
import "@nomiclabs/hardhat-etherscan";
import 'hardhat-contract-sizer';
import dotenv from 'dotenv';

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PROD_PRIVATE_KEY = process.env.PROD_PRIVATE_KEY;
const ALCHEMY_MAINNET_KEY = process.env.ALCHEMY_MAINNET_KEY;
const ALCHEMY_KEY_MUMBAI = process.env.ALCHEMY_KEY_MUMBAI;
const ALCHEMY_KEY_POLYGON_MAINNET = process.env.ALCHEMY_KEY_POLYGON_MAINNET;


const config: HardhatUserConfig = {
  solidity: {
    compilers: [
        {
            version: "0.8.17",
            settings: {
                metadata: {
                    bytecodeHash: "none",
                },
                optimizer: {
                    enabled: true,
                    runs: 1337,
                },
            },
        },
    ],
    settings: {
        outputSelection: {
            "*": {
                "*": ["storageLayout"],
            },
        },
    },
  },

  paths: {
    artifacts: "build/artifacts",
    cache: "build/cache",
    sources: "contracts",
  },

  networks: {

    localhost: {
      url:' http://127.0.0.1:8545/'
    },
    
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_KEY_MUMBAI}`,
      accounts: [`0x${PRIVATE_KEY}`]
    },

    /*
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY_POLYGON_MAINNET}`,
      accounts: [`0x${PROD_PRIVATE_KEY}`]
    },
    */
    /*
    mainnet: {
      url: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_MAINNET_KEY}`,
      accounts: [`0x${PROD_PRIVATE_KEY}`]
    }*/
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    //apiKey: process.env.MAINNET_ETHERSCAN_API_KEY
    apiKey: process.env.POLYSCAN_API_KEY
    //apiKey: process.env.MOONRIVER_ETHERSCAN_API_KEY
  },
  mocha: {
    timeout: 200000
  }
};

export default config;
