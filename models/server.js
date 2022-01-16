const express = require('express')
const cors = require('cors')

class Server{
    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.usuariosPath='/api/usuarios';
        //middlewares
        this.middlewares();
        //rutas de aplicacion
        this.routes();
    }

    middlewares(){
        //directorio publico
        this.app.use(express.static('public'));
        //cors
        this.app.use(cors());
        //Parseo y lectura del body
        this.app.use(express.json());
    }
    routes(){
       this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor',this.port);
        });
    }
}

module.exports=Server;