import {Request, Response} from 'express';

export const getProducts = (req: Request, res: Response ) => {
    res.json({
        msg: 'get Products'
    })
}

export const getProduct = (req: Request, res: Response ) => {
    res.json({
        msg: 'get Producto determinado por su id',
        id: req.params.id
    })

}