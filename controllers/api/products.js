const Product = require('../../models/product')

module.exports = {
    index,
    create
}

async function index(req, res) {
    const products = await Product.find({})
    res.status(200).json(products)
}

async function create(req, res) {
    const product = await Product.create(req.body);
    res.status(201).json(product)
}