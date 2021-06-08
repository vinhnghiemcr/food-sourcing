const express = require('express'),
      router  = express.Router();

const SupplyChain = require('../core/SupplyChain');
// const products = require('../utils/product.json');
const Block = require('../database/models/block');


//get supplychain of product with name
//path -> /name?v=&loc=

router.get("/pname", (req, res) => {
    let name = req.query.v;
    let loc = req.query.loc;
    let sc = new SupplyChain(name);
    let chain = [];
    Block.find({}).populate('record').exec((err, blocks) => {
        if(err) console.log(err);
        else{
            const products = blocks
                .filter(b => (b.record && b.record.name === 'avocado'))
                .map(b => b.record);
            products.forEach(record => {
                let {stage, date, location, transportFrom, transportTo, cost} = record;
                let data = {
                    stage,
                    date,
                    location,
                    transportFrom,
                    transportTo,
                    cost
                };
                switch(stage){
                    case "farming":
                        sc.origin = location;
                        chain.push([data]);
                        break;
                    case "processing":
                        for(let c of chain){
                            if(c[c.length-1].location === location){
                                c.push(data);
                                break;
                            }
                        };
                        break;
                    case "transportation":
                        let b = false;
                        for(let c of chain){
                            if(!c[c.length-1].transportTo){
                                if(c[c.length-1].location === transportFrom){
                                    c.push(data);
                                    b = false;
                                    break;
                                }
                            }else if(c[c.length-1].transportTo === location){
                                c.push(data);
                                b = false;
                                break;
                            }else
                                b = true;
                        };
                        if(b) chain.push([data]);
                        break;
                    case "consuming":  
                        for(let c of chain){
                            if(c[c.length-1].location === location){
                                c.push(data);
                                break;
                            }
                        };
                        break;
                }
            });
            console.log(chain);
            for(let c of chain){
                if(c[c.length-1].location === loc){
                    sc.chain = [chain[0][0], ...c];
                    sc.price = c[c.length-1].cost;
                    break;
                }
            }
            res.json(sc);
        }
    });
});

module.exports = router;