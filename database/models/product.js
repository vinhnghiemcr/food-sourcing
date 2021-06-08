const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    qrcode: String,
    stage: String,
    date: {type: Date, default: Date.now},
    amount: Number,
    location: String,
    transportFrom: String,
    transportTo: String,
    cost: String
});

module.exports = mongoose.model('Product', productSchema);