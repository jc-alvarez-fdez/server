"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.addProduct = exports.deleteProduct = exports.getProduct = exports.getProducts = void 0;
const producto_model_1 = __importDefault(require("../models/producto.model"));
// Muestra todos los productos
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProductos = yield producto_model_1.default.findAll();
    res.json(listProductos);
});
exports.getProducts = getProducts;
// Muestra producto por id
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const producto = yield producto_model_1.default.findByPk(id);
    if (producto) {
        res.json(producto);
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        });
    }
    ;
});
exports.getProduct = getProduct;
// Elimina producto por id
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const producto = yield producto_model_1.default.findByPk(id);
    if (!producto) {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        });
    }
    else {
        yield producto.destroy();
        res.json({
            msg: `El producto se ha eliminado`
        });
    }
});
exports.deleteProduct = deleteProduct;
// Añadir producto
const addProduct = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'añade Producto',
        body
    });
};
exports.addProduct = addProduct;
// Modificar producto
const updateProduct = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'modificar Producto',
        id,
        body
    });
};
exports.updateProduct = updateProduct;
