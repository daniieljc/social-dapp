// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Post {
    uint256 value = 0;

    function increase() public {
        value += 1;
    }

    function getValue() public view returns (uint256) {
        return value;
    }
}
