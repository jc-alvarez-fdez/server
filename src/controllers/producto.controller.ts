import e, {Request, Response} from 'express';
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
export const addProduct = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Producto.create(body);

        res.json({
            msg: 'El producto se ha añadido',
            body
        });

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error, póngase en contacto con soporte',
        });
    }

    

    res.json({
        msg: 'El producto se ha añadido',
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