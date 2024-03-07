import { Router } from "express";
import { getProducts } from "../controllers/producto.controller";

const router = Router();

router.get('/', getProducts);

export default router;