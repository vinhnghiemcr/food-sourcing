const Block = require('./Block.js');
const BlockChain = require('./BlockChain.js');

// Helper function to generate_dummy_data
// Randomly generates some example QR code strings
function generate_codes(N, len){
    var codes = [];
    for (let i = 0; i < N; i++){
        chars = [];
        options = 'abcdefghijklmnopqrstuvwxyz0123456789';
        for (let j = 0; j < len; j++){
            var index = Math.floor(Math.random() * options.length);
            chars.push(options[index]);
        }
        codes.push(chars.join(''));
    }
    return(codes);
}

// Creates 10 records that could be used as data in an example blockchain
function generate_dummy_data(){
    let foods = ["Apple", "Orange", "Banana", "Potato", "Strawberries", "Celery", "Leek", "Pummelo", "Dragonfruit", "Guinea Pig"];
    let locations = ["Mobile, AL", "Terrapin Station, MT", "Denver, CO", "Franklins Tower, TX", "Baker Street, MA", 
                    "Lubbock, TX", "Wichita, KS", "Fennario, WY", "Big Foot County, ND", "Santa Fe, NM"];
    let codes = generate_codes(10, 8);
    let objects = [];
    for (let i = 1; i <= 10; i++){
        let obj = {};
        let mp = Math.floor(Math.random() * 10) + 2;
        obj.name = foods[i-1];
        obj.QR_code = codes[i-1];
        obj.amount = Math.floor(Math.random() * 1000);
        obj.location = locations[i];
        obj.transport_from = locations[i%2];
        obj.transport_to = locations[i-1];
        obj.cost = mp,
        objects.push(obj);
    }
    return(objects);
}

// Main 
// Creates a blockchain with 10 blocks containing semi-random data to serve as an example
let ledger = new BlockChain();
let blocks = generate_dummy_data();
for (let i = 0; i < 10; i++){
    let date = "3/" + (i+((i+8)%3)).toString() + "/2019";
    ledger.updateBlockChain(new Block(i, date, blocks[i]));
}
console.log(JSON.stringify(ledger, null, 4));
console.log(ledger.verify() ? "BlockChain is uncorrupted." : "BlockChain has been illegally tampered with.");

// Demonstrates adding data to the BlockChain
let record = {
    item_name : "Banana",
    qrcode : "sv5lkdj83s",
    amount : 200,
    location : "Mobile, AL",
    transport_from : "Lima, Peru",
    transport_to : "Memphis, TN",
    cost : 1.5
};
ledger.updateBlockChain(new Block(11, "5/5/2019", record));
console.log(ledger.verify() ? "BlockChain is uncorrupted." : "BlockChain has been illegally tampered with.");


// Demonstrates incorruptibility of BlockChain
console.log("------------ Tampering Demonstration -------------");
console.log("Block 5 Original Cost: " + ledger.block_chain[5].record.cost);
console.log(ledger.verify() ? "BlockChain is uncorrupted." : "BlockChain has been illegally tampered with.");
ledger.block_chain[5].record.cost = 200;
console.log("Block 5 Tampered Cost: " + ledger.block_chain[5].record.cost);
console.log(ledger.verify() ? "BlockChain is uncorrupted." : "BlockChain has been illegally tampered with.");
