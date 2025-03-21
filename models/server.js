const express = require( 'express' );
var cors = require( 'cors' );
const { dbConnection } = require( '../database/config.db' );

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';

    // Conectar a una base de datos
    this.conectarDB();

    //Middlewares
    this.middlewares();


    //Rutas de mi aplicación

    this.routes();

  }

  async conectarDB() {

    await dbConnection();

  }

  middlewares() {
    // CORS
    this.app.use( cors() );

    // Lectura y paseo de body
    this.app.use( express.json() );


    // Directorio publico
    this.app.use( express.static( 'public' ) );

  }

  routes() {

    this.app.use( this.usuariosPath, require( '../routes/usuarios.route' ) );


  }

  listen() {
    this.app.listen( this.port, () => {
      console.log( `Servidor corriendo en ${ this.port }` );
    } );
  }
}

module.exports = Server;
