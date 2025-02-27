// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import {Test} from "../lib/forge-std/src/Test.sol";
import {Example} from "../contracts/Example.sol";

contract ExampleTest is Test {
    Example public exampleContract;

    function setUp() public {
        exampleContract = new Example();
        exampleContract.initialize("Example", "EXM");
    }

    function testExample() public {
        assertEq(exampleContract.name(), "Example");
        assertEq(exampleContract.symbol(), "EXM");
    }

}
