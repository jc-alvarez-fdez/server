import {Request, Response} from 'express';
import Producto from '../models/producto.model';


// Muestra todos los productos
export const getProducts = async (req: Request, res: Response ) => {   
    const listProductos = await Producto.findAll();
    res.json(listProductos);
}

// Muestra producto por id
export const getProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);

    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({
            msg:`No existe un producto con el id ${id}`
        })
    };
}


// Elimina producto por id
export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    if (!producto) {
        res.status(404).json({
        msg:`No existe un producto con el id ${id}`
        })
    } else {
        await producto.destroy();
        res.json({
            msg: `El producto se ha eliminado`
        })
        
    }
 }



// Añadir producto
export const addProduct = (req: Request, res: Response) => {
    const { body } = req;
    res.json({
        msg: 'añade Producto',
        body
    });
}

// Modificar producto
export const updateProduct = (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'modificar Producto',
        id,
        body
    });
}