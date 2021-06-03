// contracts/HelloWorld.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract HelloWorld is Ownable {
    string public message = "HelloWorld";

    constructor() {}

    function getMessage() public view returns (string memory) {
        return message;
    }
}
