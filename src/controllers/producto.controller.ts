import {Request, Response} from 'express';


// Muestra todos los productos
export const getProducts = (req: Request, res: Response ) => {
    res.json({
        msg: 'get Products'
    })
}

// Muestra producto por id
export const getProduct = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg: 'get Producto determinado por su id',
        id
    });
};


// Elimina producto por id
export const deleteProduct = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg: 'delete Producto determinado por su id',
        id
    });
};


// Añadir producto
export const addProduct = (req: Request, res: Response) => {
    const { body } = req;
    res.json({
        msg: 'añade Producto',
        body
    });
};

// Modificar producto
export const updateProduct = (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'modificar Producto',
        id,
        body
    });
};