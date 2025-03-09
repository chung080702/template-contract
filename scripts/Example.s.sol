// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import {Script} from "../lib/forge-std/src/Script.sol";
import {Example} from "../contracts/Example.sol";

contract ExampleTest is Script {
    Example public exampleContract;

    function run() external {
        uint256 privateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(privateKey);
        exampleContract = new Example();
        exampleContract.initialize("Example", "EXM");
        vm.stopBroadcast();
    }
}
