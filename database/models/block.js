const mongoose = require('mongoose');

const blockSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    timestamp: {type: Date, default: Date.now},
    record: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    previousHash: String,
    hash: String
});

module.exports = mongoose.model('Block', blockSchema);