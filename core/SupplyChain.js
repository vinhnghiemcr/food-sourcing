class SupplyChain {
    constructor(name="", origin="", price="", chain=[]){
        this.name = name;
        this.origin = origin;
        this.price = price;
        this.chain = chain;
    }
}

module.exports = SupplyChain;