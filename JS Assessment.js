let totalNFTs = 0;

function mintNFT(name, description, owner) {
  
    const newNFT = {
        name: name,
        description: description,
        owner: owner
    };
    totalNFTs++;
    return newNFT;
}

function listNFTs(nfts) {
    for (const nft of nfts) {
        console.log("Name: " + nft.name);
        console.log("Description: " + nft.description);
        console.log("Owner: " + nft.owner);
        console.log("------------------------------------");
    }
}

function getTotalSupply() {
    console.log("Total number of NFTs minted: " + totalNFTs);
}

const nft1 = mintNFT("NFT 1", "This is the first NFT", "Alice");
const nft2 = mintNFT("NFT 2", "This is the second NFT", "Bob");


const myNFTs = [nft1, nft2];

console.log("Listing all NFTs:");
listNFTs(myNFTs);

getTotalSupply();
