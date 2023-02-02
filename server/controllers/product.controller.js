const { Product } = require('../models/products.model');

module.exports.createProduct = (req, res) => {
    const {title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.getProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err))
}

module.exports.OneProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

