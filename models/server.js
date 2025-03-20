const express = require( 'express' );
var cors = require('cors')

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios'
  

    //Middlewares
    this.middlewares()


    //Rutas de mi aplicación

    this.routes();

  }

  middlewares() {
    // CORS
    this.app.use(cors())

    // Lectura y paseo de body
    this.app.use( express.json() )


    // Directorio publico
    this.app.use( express.static('public') );

  }

  routes() {

    this.app.use(this.usuariosPath, require('../routes/usuarios.route'))
   

  }

  listen() {
    this.app.listen( this.port, () => {
      console.log( `Servidor corriendo en ${ this.port }` );
    } );
  }
}

module.exports = Server;
