const Block = require('./Block.js');

// Objects of BlockChain class have a field 'block_chain' that is an array of Block class objects
// The BlockChain can have Blocks added to it (updateBlockChain), and it can also be checked for validity (verify)
// If the BlockChain has been tampered with, verify() will return false
class BlockChain{
    // Initialize block chain with genesis block
    constructor(){
        this.block_chain = [this.genesis()];
    }

    genesis(){ return(new Block(0, "04/30/2019", "In the beginning", "NA")); }

    // This method allows distributors and retailers to add their data to the block chain
    updateBlockChain(block){
        // Get length of block chain
        var chain_links = this.block_chain.length;
        // Retrieve most recent block from block chain
        var previous_block = this.block_chain[chain_links - 1];
        // Set the previous_hash of the newly created block equal to hash of the most recent block
        block.previous_hash = previous_block.hash;
        // Generate a new hash for the new block
        block.hash = block.hasher();
        // Add new block to the block chain
        this.block_chain.push(block);
    }

    // This function checks the integrity of the block chain
    verify(){
        var flag = true;
        for (let i = 1; i < this.block_chain.length; i++){
            var b1 = this.block_chain[i-1];
            var b2 = this.block_chain[i];
            if (b1.hash !== b2.previous_hash) {flag = false};
            if (b2.hash !== b2.hasher()) {flag = false};
            if (flag == false) {break;}
        }
        return(flag);
    }
}

module.exports = BlockChain;