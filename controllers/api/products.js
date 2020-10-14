const Product = require('../../models/product')

module.exports = {
    index,
    create,
    deleteOne,
    update
}

async function index(req, res) {
    const products = await Product.find({})
    res.status(200).json(products)
}

async function create(req, res) {
    const product = await Product.create(req.body);
    res.status(201).json(product)
}

async function deleteOne(req, res) {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(product)
}

async function update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(product)
}