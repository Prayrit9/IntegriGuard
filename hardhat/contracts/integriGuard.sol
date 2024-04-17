// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

contract integriGuard {

        using EnumerableSet for EnumerableSet.AddressSet;
    using EnumerableSet for EnumerableSet.UintSet;
        using EnumerableSet for EnumerableSet.Bytes32Set;


    EnumerableSet.AddressSet private mySet;
mapping (address=> EnumerableSet.AddressSet) private  addressSet;
mapping (address=> EnumerableSet.UintSet) private  timeSet;
mapping (address=> EnumerableSet.Bytes32Set) private  dataSet;

   
   function setStatus(string memory data) public {
     bytes memory tempEmptyStringTest = bytes(data);
    if (tempEmptyStringTest.length == 0) {
        return ;
    }

    bytes32 result;
    assembly {
        result := mload(add(data, 32))
    }
   
    dataSet[msg.sender].add(result);
    addressSet[msg.sender].add(msg.sender);
    timeSet[msg.sender].add(block.timestamp);
   }



  function getData(
        
    ) public view returns (bytes32[] memory) {
        return dataSet[msg.sender].values();
    }
     function getAddress(
        
    ) public view returns (address[] memory) {
        return addressSet[msg.sender].values();
    }
     function getTime(
        
    ) public view returns (uint[] memory) {
        return timeSet[msg.sender].values();
    }

}