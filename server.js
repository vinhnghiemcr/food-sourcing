require('dotenv').config();

const express    = require('express'),
      bodyParser = require('body-parser');

const mongoose = require('mongoose');
const Product = require('./database/models/product');
const Block = require('./database/models/block');

const supplychainRoutes = require('./routes/supplychain');

const Blockchain = require('./core/BlockChain');
const {addData, getAllData} = require('./database/populate');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.Promise = global.Promise;

//Database connection
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@food-souce-db-5nbdt.mongodb.net/test?retryWrites=true`,
 {
    useNewUrlParser: true,
}).then(()=> {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log("Could not connect to the database. Exiting now.. ",err);
    process.exit();
});

// const bc = new Blockchain().block_chain;
// console.log(bc[0]);

// Block.create(new Block({
//     _id: new mongoose.Types.ObjectId(),
//     timestamp: new Date(bc[0].timestamp),
//     record: null,
//     previousHash: bc[0].previous_hash,
//     hash: bc[0].hash
// }), (err, b) => {
//     if(err) console.log(err);
//     else console.log(b);
// });

// addData();
// getAllData();
// Product.deleteMany({}, err => {
//     if(err) console.log(err);
//     else console.log('removed');
// })
// Block.deleteOne({}, err => {
//     if(err) console.log(err);
//     else console.log('removed');
// })
// Product.find({}, (err, p) => {
//     if(err) console.log(err);
//     else console.log(p);
// })

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("Hello");
});

app.use('/sc', supplychainRoutes);

app.listen(port, () => {
    console.log("Server is running at " + port);
});