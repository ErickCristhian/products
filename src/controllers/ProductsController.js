const Products = require('../repository/Products')


module.exports = {
    async ReadAll(req, res) {
        return res.status(200).json(Products)
    }
}