import { Router } from "express";
import { getProduct, getProducts } from "../controllers/producto.controller";

const router = Router();

router.get('/', getProducts); //devuelve todos los productos
router.get('/:id', getProduct); //devuelve producto por id

export default router;