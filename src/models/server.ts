import express, { Application, Request, Response } from 'express';
import  routesProducto from '../routes/producto.route';
import db from '../db/connection';


class Server {

    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "3001";
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();

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

        midlewares() {
            //Parseamos el body
            this.app.use(express.json());
        }
    }

     dbConnect() {

        await db.authenticate();
        console.log('Base de datos conectada')
     }

 
export default Server;