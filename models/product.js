const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema ({
    name: String,
    description: String,
    category: {type: String, enum: ["Men's Tops", "Men's Shorts", "Women's Tops", "Women's Shorts"], required: true},
    price: {type: Number, min: 0},
    photo: String,
})

module.exports = mongoose.model('Product', productSchema);