const mongoose = require('mongoose');
const Product = require('./models/product');
const Block = require('./models/block');
const BlockX = require('../core/Block');

const products = [
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: "avocado",
        qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
        stage: "farming",
        date: new Date("2018-07-14T22:58:25.000Z"),
        amount: 2000,
        location: "Po Box 423, Jayton, TX, 79528",
        transportFrom: null,
        transportTo: null,
        cost: "$1890.00"
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: "avocado",
        qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
        stage: "transportation",
        date: new Date("2018-12-05T22:58:25.000Z"),
        amount: 1500,
        location: "Po Box 423, Jayton, TX, 79528",
        transportFrom: "Po Box 423, Jayton, TX, 79528",
        transportTo: "1 First American Way, Santa Ana, CA, 92707",
        cost: "$450.00"
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: "avocado",
        qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
        stage: "transportation",
        date: new Date("2018-12-05T23:58:25.000Z"),
        amount: 500,
        location: "Po Box 423, Jayton, TX, 79528",
        transportFrom: "Po Box 423, Jayton, TX, 79528",
        transportTo: "1507 Nolan St, San Antonio, TX, 78202",
        cost: "$175.00"
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: "avocado",
        qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
        stage: "transportation",
        date: new Date("2018-12-06T10:58:25.000Z"),
        amount: 500,
        location: "1507 Nolan St, San Antonio, TX, 78202",
        transportFrom: "Po Box 423, Jayton, TX, 79528",
        transportTo: "1507 Nolan St, San Antonio, TX, 78202",
        cost: null
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: "avocado",
        qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
        stage: "transportation",
        date: new Date("2018-12-06T10:58:25.000Z"),
        amount: 500,
        location: "1507 Nolan St, San Antonio, TX, 78202",
        transportFrom: "Po Box 423, Jayton, TX, 79528",
        transportTo: "1507 Nolan St, San Antonio, TX, 78202",
        cost: null
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: "avocado",
        qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
        stage: "transportation",
        date: new Date("2018-12-07T11:58:25.000Z"),
        amount: 1500,
        location: "1 First American Way, Santa Ana, CA, 92707",
        transportFrom: "Po Box 423, Jayton, TX, 79528",
        transportTo: "1 First American Way, Santa Ana, CA, 92707",
        cost: null
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: "avocado",
        qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
        stage: "processing",
        date: new Date("2018-12-07T13:58:25.000Z"),
        amount: 1,
        location: "1507 Nolan St, San Antonio, TX, 78202",
        transportFrom: null,
        transportTo: null,
        cost: "$2.00"
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: "avocado",
        qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
        stage: "transportation",
        date: new Date("2018-12-08T08:58:25.000Z"),
        amount: 500,
        location: "1507 Nolan St, San Antonio, TX, 78202",
        transportFrom: "1507 Nolan St, San Antonio, TX, 78202",
        transportTo: "5025 Northwest Loop 410, San Antonio, TX, 78229",
        cost: "$85.00"
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: "avocado",
        qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
        stage: "processing",
        date: new Date("2018-12-08T10:58:25.000Z"),
        amount: 1,
        location: "1 First American Way, Santa Ana, CA, 92707",
        transportFrom: null,
        transportTo: null,
        cost: "$2.10"
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: "avocado",
        qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
        stage: "transportation",
        date: new Date("2018-12-08T14:58:25.000Z"),
        amount: 500,
        location: "5025 Northwest Loop 410, San Antonio, TX, 78229",
        transportFrom: "1507 Nolan St, San Antonio, TX, 78202",
        transportTo: "5025 Northwest Loop 410, San Antonio, TX, 78229",
        cost: null
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: "avocado",
        qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
        stage: "transportation",
        date: new Date("2018-12-09T09:58:25.000Z"),
        amount: 1500,
        location: "1 First American Way, Santa Ana, CA, 92707",
        transportFrom: "1 First American Way, Santa Ana, CA, 92707",
        transportTo: "3600 W McFadden Ave, Santa Ana, CA, 92704",
        cost: "$120.00"
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: "avocado",
        qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
        stage: "consuming",
        date: new Date("2018-12-09T10:58:25.000Z"),
        amount: 1,
        location: "5025 Northwest Loop 410, San Antonio, TX, 78229",
        transportFrom: null,
        transportTo: null,
        cost: "$2.15"
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: "avocado",
        qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
        stage: "transportation",
        date: new Date("2018-12-09T18:58:25.000Z"),
        amount: 1500,
        location: "3600 W McFadden Ave, Santa Ana, CA, 92704",
        transportFrom: "1 First American Way, Santa Ana, CA, 92707",
        transportTo: "3600 W McFadden Ave, Santa Ana, CA, 92704",
        cost: null
    }),
    new Product({
        _id: new mongoose.Types.ObjectId(),
        name: "avocado",
        qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
        stage: "consuming",
        date: new Date("2018-12-10T08:58:25.000Z"),
        amount: 1,
        location: "3600 W McFadden Ave, Santa Ana, CA, 92704",
        transportFrom: null,
        transportTo: null,
        cost: "$2.89"
    })
];

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

const addData = async () => {
    await asyncForEach(products, async p => {
        try{
            const sp = await Product.create(p);
            console.log('added product');
            const lb = await Block.findOne({}).sort('-timestamp').exec();
            const block = new BlockX(new mongoose.Types.ObjectId(), Date.now(), sp._id, lb.hash);
            const sb = await Block.create(new Block({
                _id: block._id,
                timestamp: block.timestamp,
                record: block.record,
                previousHash: block.previous_hash,
                hash: block.hash
            }));
            console.log('added block');
        }catch(err){
            console.log(err);
        }
    });
}

const getAllData = () => {
    Block.find({}).populate('record').exec((err, b) => {
        if(err) console.log(err);
        else{
            console.log(b);
        }
    });
}

module.exports = {addData, getAllData};