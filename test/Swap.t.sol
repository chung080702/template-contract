// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import {Test} from "../lib/forge-std/src/Test.sol";
import "../contracts/lib/IUniswapV2Router.sol";
import "../contracts/lib/IWeth.sol";

contract ExampleTest is Test {
    IUniswapV2Router02 public uniswapV2Router;
    IWeth public weth;
    ERC20 public usdt;

    function setUp() public {
        address routerAddress = vm.envAddress("UNISWAP_V2_ROUTER");
        address wethAddress = vm.envAddress("WETH");
        address usdtAddress = vm.envAddress("USDT");

        uniswapV2Router = IUniswapV2Router02(routerAddress);
        weth = IWeth(wethAddress);
        usdt = ERC20(usdtAddress);
    }

    function testDepositWeth() public {
        uint256 preBalance = weth.balanceOf(address(this));
        weth.deposit{value: 1 ether}();
        assertEq(weth.balanceOf(address(this)), preBalance + 1 ether);
    }

    function testSwapExactETHForTokens() public {
        uint256 preBalance = usdt.balanceOf(address(this));
        address[] memory path = new address[](2);
        path[0] = address(weth);
        path[1] = address(usdt);
        uniswapV2Router.swapExactETHForTokens{value: 1 ether}(0, path, address(this), block.timestamp + 1000);
        assertGt(usdt.balanceOf(address(this)), preBalance);
    }
}
