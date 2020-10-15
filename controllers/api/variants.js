const Variant = require('../../models/variant')

module.exports = {
    index,
    create,
    deleteMany
}

async function index(req, res){
    const variants = await Variant.find({})
    res.status(200).json(variants)
}

async function create(req, res){
    const newVariant = await Variant.create(req.body)
    res.status(201).json(newVariant)
}

async function deleteMany(req, res) {
    const variants = await Variant.deleteMany({product: req.params.id});
    res.status(200).json(variants)
}