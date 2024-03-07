"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_controller_1 = require("../controllers/producto.controller");
const router = (0, express_1.Router)();
router.get('/', producto_controller_1.getProducts); //devuelve todos los productos
router.get('/:id', producto_controller_1.getProduct); //devuelve producto por id
router.delete('/:id', producto_controller_1.deleteProduct); // elimina producto por id
router.post('/', producto_controller_1.addProduct); // añade producto
router.put('/:id', producto_controller_1.updateProduct);
exports.default = router;
