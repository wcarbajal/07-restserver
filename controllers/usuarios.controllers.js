const {request, response } = require('express')


const usuariosGet = ( req, res = response ) => {
  
  res.json( {
    msg: "get Api - Controlador"
  } );

}

const usuariosPut = ( req, res ) => {
  res.json( {
    msg: "put Api - Controlador"
  } );
} 

const usuariosPost = ( req = request, res ) => {
  const { nombre, edad } = req.body;

  

  res.json( {
    msg: "post Api - Controlador",
    nombre, 
    edad
  } );
} 
const usuariosDelete = ( req, res ) => {
  res.json( {
    msg: "delete Api - Controlador"
  } );
} 
const usuariosPatch = ( req, res ) => {
  res.json( {
    msg: "patch Ap - Controlador"
  } );
} 

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
}