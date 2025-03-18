const express = require( 'express' );

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
  

    //Middlewares
    this.middlewares()


    //Rutas de mi aplicación

    this.routes();

  }

  middlewares() {
    // Directorio publico
    this.app.use( express.static('public') );

  }

  routes() {

    this.app.get( '/api', function ( req, res ) {
      res.json( {        
        msg: 'get Api'
      } );
    } );

    this.app.put( '/api', function ( req, res ) {
      res.json( {        
        msg: 'put Api'
      } );
    } );

    this.app.post( '/api', function ( req, res ) {
      res.json( {        
        msg: 'post Api'
      } );
    } );

    this.app.delete( '/api', function ( req, res ) {
      res.json( {        
        msg: 'delete Api'
      } );
    } );

  }

  listen() {
    this.app.listen( this.port, () => {
      console.log( `Servidor corriendo en ${ this.port }` );
    } );
  }
}

module.exports = Server;
