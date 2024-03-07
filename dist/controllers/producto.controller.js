"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = exports.getProducts = void 0;
const getProducts = (req, res) => {
    res.json({
        msg: 'get Products'
    });
};
exports.getProducts = getProducts;
const getProduct = (req, res) => {
    res.json({
        msg: 'get Producto determinado por su id',
        id: req.params.id
    });
};
exports.getProduct = getProduct;
