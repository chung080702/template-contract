# Template: Hardhat + Foundry

This project template integrates Hardhat for deployment and scripting with Foundry for fast, Solidity-based testing. Follow the instructions below to set up your environment, understand the project structure, and learn common commands.

---

## 1. Preparation & Prerequisites

Before you start, ensure you have the following installed:

- **Node.js v18**  
  Install Node.js version 18 from [nodejs.org](https://nodejs.org/).

- **Yarn**  
  Install Yarn from [yarnpkg.com](https://yarnpkg.com/) (or use npm if you prefer).

- **Foundry (Forge) v1**  
  Install Foundry by running:
  ```bash
  curl -L https://foundry.paradigm.xyz | bash
  foundryup
  ```
  Verify the installation with:

  ```bash
  forge --version  
  ```
## 2. Project Folder Structure
The repository is organized as follows:

- **contracts/** 
Contains the Solidity source code for your contracts.

- **deploy/** 
Contains TypeScript deployment scripts. To enforce proper deployment order, name your files with numeric prefixes (e.g., 01_deploy_MyContract.ts, 02_deploy_OtherContract.ts).

- **deployment/** 
Stores deployment artifacts and information about deployed contracts (generated by hardhat-deploy).

- **lib/** 
Contains Foundry libraries (e.g., forge-std) used for testing and scripting.

- **scripts/** 
Contains scripts for interacting with contracts.

- **test/** 
Contains Solidity test files written in Foundry style (using ds-test).
Within the test/ folder, there is an env/ subfolder that stores environment variable files (e.g., .env.localhost, .env.mainnet) for different networks during testing.

## 3. Common Commands
Below are some frequently used commands for compiling, testing, and deploying your contracts:

Compile Contracts & Generate TypeChain Files
This command compiles your contracts and generates TypeScript types for interacting with them.

```bash
npm run typechain
```
Start a Local Blockchain Node
Launch a local blockchain using the configuration in hardhat.config.ts (by default, forked from Ethereum).

```bash
npx hardhat node
```
List Accounts
Display the available accounts.

```bash
npx hardhat accounts
```
Check the Current Block Number
View the current block number.

```bash
npx hardhat blocknumber
```
Run Foundry Tests via Hardhat
This command runs tests written in Solidity (Foundry style) on a forked network.

```bash
npx hardhat forge-test --network localhost
```
(You can specify filters, such as match-path or match-contract, via parameters in your custom task.)

Run Foundry Script via Hardhat
This command runs tests written in Solidity (Foundry style).

```bash
npx hardhat forge-test --network localhost
```
List Available Networks
Show the networks defined in your Hardhat configuration.

```bash
npx hardhat networks
```
Deploy Contracts
Deploy your contracts using Hardhat Deploy.

```bash
npx hardhat deploy --network localhost
```

Run a Specific Script
Execute a specific Hardhat script (e.g., scripts/example.ts).

```bash
npx hardhat run scripts/example.ts --network localhost
```
