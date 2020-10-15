const mongoose = require('mongoose');
const Schema = mongoose.Schema

const variantSchema = new Schema ({
    size: {type: String, enum: ['Small', 'Medium', 'Large', 'Extra Large'], required: true},
    inventory: {type: Number, required: true},
    product: {type: Schema.Types.ObjectId, ref: 'Product'}
})

module.exports = mongoose.model('Variant', variantSchema)