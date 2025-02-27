import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    await deploy("ExampleBytecode", {
        from: deployer,
        args: [],
        log: true,
        contract: "Example",
    });
};

export default func;
func.tags = ["ExampleBytecode"];
