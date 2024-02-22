// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import "@account-abstraction/contracts/core/EntryPoint.sol";
import "@account-abstraction/contracts/interfaces/IAccount.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
// import "hardhat/console.sol"; //This is related to the Test contract. When we want to use the Test contract, we uncomment it.

//------------------------------------------------------------------------------------------------------------------------
// This contract is only for testing that our way of dealing with numbers and hashes are correct.
// When the check is over, we don't need this contract no more.abi

// PS: This test contract has been deployed on a test chain also. To achieve that, you can run
// the following command: (((( npx hardhat run scripts/sig.js --network hardhat )))) instead of
// the usual (((( npx hardhat run scripts/sig.js ))))

// contract Test
// {
//     constructor(bytes memory sig)
//     {
//         address recovered= ECDSA.recover(ECDSA.toEthSignedMessageHash(keccak256("wee")),sig);
//         console.log(recovered);
//     }
// }
//------------------------------------------------------------------------------------------------------------------------




// This contract is the account contract. It follows the interface provided by 
// account-abstraction's Iaccount smart contract. It MUST have the function (validateUserOp).
// Any customization beyond that is up to the coder to do. An account could have logic here, 
// unlike the popular EAO's accounts. This account could nbe understood as a struct, and the
// and later when the accountFactory gets called, an instance of this struct -means an account-
// gets created with all logic and customization done by the user.


contract Account is IAccount
{
    //We have full programmability in this contract. Will play around with that later.

    uint256 public count;
    address public owner;

    constructor(address _owner)
    {
        owner=_owner;
    }

    function validateUserOp(UserOperation calldata userOp, bytes32 userOpHash, uint256) external view returns (uint256 validationData)
    {
        //When this funcion returns 0, that tells the Entry Point that all UserOps
        // created by this account is valid, and accept all of them.
        //More logic will be added as soon as I understand what's what.
        // return 0;

        //playing around:
        address recovered=ECDSA.recover(ECDSA.toEthSignedMessageHash(userOpHash),userOp.signature);
        return owner==recovered ? 0 : 1;
    }

    function execute() external
    {
        count++;
    }
}

contract AccountFactory
{
    function createAccount(address owner) external returns(address)
    {
        Account acc= new Account(owner);
        return address(acc);
    }
}
