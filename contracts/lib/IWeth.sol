// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract IWeth is ERC20 {
    constructor() ERC20("Wrapped Ether", "WETH") {}

    // Đóng gói ETH thành WETH
    function deposit() external payable {
    }

    // Mở gói WETH thành ETH
    function withdraw(uint256 amount) external {
    }

}