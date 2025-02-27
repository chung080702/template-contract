import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Example__factory } from "../typechain";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const initData = Example__factory.createInterface()
                        .encodeFunctionData("initialize", ["HAILY","HLY"]);

    const proxyAdmin = await deployments.get("ProxyAdmin");
    const implementation = await deployments.get("ExampleBytecode");
    
    await deploy("Example", {
        from: deployer,
        args: [implementation.address, proxyAdmin.address, initData],
        log: true,
        contract: "TransparentUpgradeableProxy",
    });
};

export default func;
func.tags = ["Example"];
