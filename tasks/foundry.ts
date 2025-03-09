// tasks/forge-test.ts

import { task } from "hardhat/config";
import { exec } from "child_process";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import * as fs from "fs";
import * as dotenv from "dotenv";

task("forge-test", "Runs Foundry tests on a forked network")
    .addOptionalParam("matchPath", "Only run tests in source files that do not match the specified glob pattern")
    .addOptionalParam("matchContract", "Only run tests in contracts matching the specified regex pattern")
    .addOptionalParam("matchTest", "Only run test functions matching the specified regex pattern")
    .setAction(async (taskArgs, hre: HardhatRuntimeEnvironment) => {
        const chainName = hre.hardhatArguments.network;
        const envNetwork = fs.readFileSync(`env/.env.${chainName}`).toString();
        const envNetworkConfig = dotenv.parse(envNetwork);

        const env = fs.readFileSync(`.env`).toString();
        const envConfig = dotenv.parse(env);

        for (const key in envNetworkConfig) {
            envConfig[key] = envNetworkConfig[key];
        }

        const envString = Object.entries(envConfig).map(([key, value]) => `${key}=${value}`).join("\n");
        fs.writeFileSync(".env", envString);

        const rpcUrl = hre.ethers.provider.connection.url;

        const matchPath = taskArgs["matchPath"] ? "--match-path " + taskArgs.matchPath : "";
        const matchContract = taskArgs["matchContract"] ? "--match-contract " + taskArgs.matchContract : "";
        const matchTest = taskArgs["matchTest"] ? "--match-test " + taskArgs.matchTest : "";
        const command = `forge test --fork-url ${rpcUrl} ${matchPath} ${matchContract} ${matchTest}`;

        console.log(`Executing: ${command}`);

        await new Promise<void>((resolve, reject) => {
            exec(command, (error, stdout, stderr) => {
                console.log(stdout);
                resolve();
            });
        });
    });

task("forge-script", "Runs a Foundry script")
    .addParam("file", "The script file to run")
    .setAction(async (taskArgs, hre: HardhatRuntimeEnvironment) => {
        const chainName = hre.hardhatArguments.network;
        const envNetwork = fs.readFileSync(`env/.env.${chainName}`).toString();
        const envNetworkConfig = dotenv.parse(envNetwork);

        const env = fs.readFileSync(`.env`).toString();
        const envConfig = dotenv.parse(env);

        for (const key in envNetworkConfig) {
            envConfig[key] = envNetworkConfig[key];
        }

        const envString = Object.entries(envConfig).map(([key, value]) => `${key}=${value}`).join("\n");
        fs.writeFileSync(".env", envString);

        const rpcUrl = hre.ethers.provider.connection.url

        const command = `forge script --broadcast --rpc-url ${rpcUrl} ${taskArgs.file}`;

        console.log(`Executing: ${command}`);

        await new Promise<void>((resolve, reject) => {
            exec(command, (error, stdout, stderr) => {
                console.log(stdout);
                resolve();
            });
        });
    });