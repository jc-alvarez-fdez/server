"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const producto_route_1 = __importDefault(require("../routes/producto.route"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "3001";
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicación corriendo en el puerto ${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'API working'
            });
            this.app.use('/api/productos', producto_route_1.default);
        });
    }
    midlewares() {
        //Parseamos el body
        this.app.use(express_1.default.json());
    }
}
dbConnect();
{
    await connection_1.default.authenticate();
    console.log('Base de datos conectada');
}
exports.default = Server;
