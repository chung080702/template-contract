import { HardhatUserConfig } from "hardhat/config";
import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-foundry";
import { HttpNetworkHDAccountsConfig } from "hardhat/types";
import "./tasks/index.ts"

import dotenv from "dotenv";

dotenv.config();

const accounts: HttpNetworkHDAccountsConfig = {
    mnemonic: process.env.MNEMONIC || "test test test test test test test test test test test junk",
    path: "m/44'/60'/0'/0",
    initialIndex: 0,
    count: 10,
    passphrase: ""
}

const hardhatAccounts = {
    mnemonic: "test test test test test test test test test test test junk",
    path: "m/44'/60'/0'/0",
    initialIndex: 0,
    count: 10,
    accountsBalance: "20000000000000000000000"  // 20ETH
}

const config: HardhatUserConfig = {
    solidity: "0.8.20",
    // gasReporter: {
    //     enabled: true,                // Bật báo cáo gas
    //     currency: "USD",              // Đơn vị tiền tệ
    //     gasPrice: 0.0000000004,
    //     forceTerminalOutputFormat: "legacy"
    // },
    networks: {
        hardhat: {
            forking: {
                url: "https://ethereum-rpc.publicnode.com",
                // blockNumber: 21412492// Optional: specify a block number to fork from
                // url: "https://bsc-testnet-rpc.publicnode.com",
                // blockNumber: 46972512 // Optional: specify a block number to fork from
            },
            accounts: hardhatAccounts,
            allowUnlimitedContractSize: true,
            gasPrice: 10564098716,
        },
        ethereum: {
            url: "https://eth.drpc.org",
            accounts
        },
        sepolia: {
            url: "https://eth-sepolia.public.blastapi.io",
            accounts
        },
        bsc_testnet: {
            url: "https://bsc-testnet-rpc.publicnode.com",
            accounts
        },
        bsc_mainnet: {
            url: "https://bsc-rpc.publicnode.com",
            accounts
        }
    },
    namedAccounts: {
        deployer: {
            default: 0, // Sử dụng tài khoản đầu tiên cho deploy
        },
        user: {
            default: 0
        }
    },
};

export default config;