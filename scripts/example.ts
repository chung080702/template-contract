import { ethers, deployments } from "hardhat";
import { Example__factory } from "../typechain";

async function main() {
    const [user] = await ethers.getSigners();
    const exampleDeployment = await deployments.get("Example");
    const exampleContract = Example__factory.connect(exampleDeployment.address, user);
    console.log(await exampleContract.name());
}

main();