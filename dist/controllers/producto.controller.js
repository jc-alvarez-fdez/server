"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.getProduct = exports.getProducts = void 0;
// Muestra todos los productos
const getProducts = (req, res) => {
    res.json({
        msg: 'get Products'
    });
};
exports.getProducts = getProducts;
// Muestra producto por id
const getProduct = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'get Producto determinado por su id',
        id
    });
};
exports.getProduct = getProduct;
// Elimina producto por id
const deleteProduct = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'delete Producto determinado por su id',
        id
    });
};
exports.deleteProduct = deleteProduct;
