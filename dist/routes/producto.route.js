"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_controller_1 = require("../controllers/producto.controller");
const router = (0, express_1.Router)();
router.get('/', producto_controller_1.getProducts); //devuelve todos los productos
router.get('/:id', producto_controller_1.getProduct); //devuelve producto por id
exports.default = router;
