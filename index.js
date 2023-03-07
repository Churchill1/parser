
const { ethers } = require("ethers");
 

// Define the contract's name and the receiver's address
const contractName = "zkSync sdsds";
// Your contract's name and the receiver's address
const receiverAddress = " sd";

// The private key of the signer (corresponds to signerAddress in your Solidity code)
const privateKey = " dsdno key heres";

// Create a new wallet instance from the private key
const wallet = new ethers.Wallet(privateKey);

// Create the message hash
const messageHash = ethers.utils.solidityKeccak256(["string", "address"], [contractName, receiverAddress]);

// Convert the message hash to an Ethereum signed message hash
const ethSignedMessageHash = ethers.utils.hashMessage(messageHash);

// Sign the message hash
wallet.signMessage(ethers.utils.arrayify(ethSignedMessageHash)).then(signature => {
    console.log("Signature:", signature);

    // Use this signature in your Solidity function call
});
