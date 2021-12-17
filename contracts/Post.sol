// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Post {
    uint256 value = 0;
    event FlagCaptured();

    function increase() public {
        value += 1;
        emit FlagCaptured();
    }

    function getValue() public view returns (uint256) {
        return value;
    }
}
