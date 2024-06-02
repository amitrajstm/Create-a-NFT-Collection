// Create a variable to hold the number of NFTs
let totalNFTs = 0;

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, owner) {
    // Create an object to hold metadata for the NFT
    const newNFT = {
        name: name,
        description: description,
        owner: owner
    };

    // Increment the total number of NFTs
    totalNFTs++;

    // Return the newly minted NFT
    return newNFT;
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs(nfts) {
    // Loop through each NFT in the array
    for (const nft of nfts) {
        // Print metadata to the console
        console.log("Name: " + nft.name);
        console.log("Description: " + nft.description);
        console.log("Owner: " + nft.owner);
        console.log("------------------------------------");
    }
}

// Print the total number of NFTs minted
function getTotalSupply() {
    console.log("Total number of NFTs minted: " + totalNFTs);
}

// Call your functions below this line

// Mint some NFTs
const nft1 = mintNFT("NFT 1", "This is the first NFT", "Alice");
const nft2 = mintNFT("NFT 2", "This is the second NFT", "Bob");

// Create an array to hold the minted NFTs
const myNFTs = [nft1, nft2];

// List all NFTs
console.log("Listing all NFTs:");
listNFTs(myNFTs);

// Get the total number of NFTs minted
getTotalSupply();
