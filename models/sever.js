const express = require( 'express' );
require( 'dotenv' ).config();

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Middelware
    this.middlewares();http://localhost:8080/api

    //Rutas de mi aplicación
    this.routes();

  }

  routes() {

    this.app.get( '/api', ( req, res ) => {
      res.json( {        
        msg: "get Api"
      } );
    } );

        this.app.put( '/api', ( req, res ) => {
      res.json( {        
        msg: "put Api"
      } );
    } );
        this.app.post( '/api', ( req, res ) => {
      res.json( {        
        msg: "post Api"
      } );
    } );
        this.app.delete( '/api', ( req, res ) => {
      res.json( {        
        msg: "delete Api"
      } );
    } );
    this.app.patch( '/api', ( req, res ) => {
      res.json( {        
        msg: "patch Api"
      } );
    } );

  }

  listen() {

    this.app.listen( this.port, () => {
      console.log( `Corriendo en puerto: ${ this.port }` );
    } );
  }

  middlewares() {
    this.app.use( express.static( 'public' ) );
  }
}

module.exports = Server;