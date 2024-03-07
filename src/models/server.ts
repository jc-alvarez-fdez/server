import express, { Application, Request, Response } from 'express';
import  routesProducto from '../routes/producto.route'

class Server {

    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "3001";
        this.listen();
        this.routes();

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Aplicación corriendo en el puerto ${this.port}`)
        })
    }    
        
        routes() {
            this.app.get('/', (req: Request, res: Response) => {
                res.json ({
                    msg: 'API working'
                })
                this.app.use('/api/productos', routesProducto);

            })
        }
    }

 
export default Server;