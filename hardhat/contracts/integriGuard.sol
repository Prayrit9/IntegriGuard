// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

contract integriGuard {
    using EnumerableSet for EnumerableSet.AddressSet;
    using EnumerableSet for EnumerableSet.UintSet;
    using EnumerableSet for EnumerableSet.Bytes32Set;

    mapping(string => EnumerableSet.AddressSet) private addressSet;
    mapping(string => EnumerableSet.UintSet) private timeSet;
    mapping(string => EnumerableSet.Bytes32Set) private dataSet;

    address[] senderAddress;
    mapping(string => address[]) private address2Set;

    function setStatus(string memory data, string memory team) public {
        bytes memory tempEmptyStringTest = bytes(data);
        if (tempEmptyStringTest.length == 0) {
            return;
        }

        bytes32 result;
        assembly {
            result := mload(add(data, 32))
        }
        address2Set[team].push(msg.sender);
        dataSet[team].add(result);
        addressSet[team].add(msg.sender);
        timeSet[team].add(block.timestamp);
    }

    function getData(
        string memory team
    ) public view returns (bytes32[] memory) {
        return dataSet[team].values();
    }

    function getAddress(
        string memory team
    ) public view returns (address[] memory) {
        return addressSet[team].values();
    }

    function getAddress2(
        string memory team
    ) public view returns (address[] memory) {
        return address2Set[team];
    }

    function getTime(string memory team) public view returns (uint[] memory) {
        return timeSet[team].values();
    }
}
