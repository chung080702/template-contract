// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import {ERC20Upgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import {Initializable} from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Example is Initializable, ERC20Upgradeable {
    function initialize(
        string memory _name, 
        string memory _symbol
    ) public initializer {
        __ERC20_init(_name, _symbol);
    }
}