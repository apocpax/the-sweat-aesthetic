const mongoose = require('mongoose');

const productSchema = new mongoose.Schema ({
    name: String,
    description: String,
    size: String,
    category: String,
    price: {type: Number, min: 0},
    inventory: {type: Number, min: 0},
    photo: String,
})

module.exports = mongoose.model('Product', productSchema);