import { Router } from "express";
import { deleteProduct, getProduct, getProducts } from "../controllers/producto.controller";

const router = Router();

router.get('/', getProducts); //devuelve todos los productos
router.get('/:id', getProduct); //devuelve producto por id
router.delete('/:id', deleteProduct); // elimina producto por id

export default router;