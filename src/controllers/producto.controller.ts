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

