const { request , response } = require('express')

const usuariosGet = ( req = request, res = response ) => {

  const {q, nombre = "No name", apikey} =req.query;

    res.status(200).json( {      
        
    msg: 'get Api - controlador ',
    q,
    nombre,
    apikey

  } );
}


const usuariosPost = ( req = request,  res = response ) => {

  const {nombre, edad} = req.body;

  res.status(200).json( {        
    msg: 'postApi - Controlador ', 
    nombre,
    edad
  } );
}

const usuariosPut = ( req = request,  res = response ) => {


  const id = req.params.id;

  res.status(200).json( {        
    msg: 'put Api - Controlador',
    id
  } );
}



const usuariosDelete = ( req = request,  res = response ) => {
  res.status(200).json( {        
    msg: 'delete Api - Controlador'
  } );
} 

const usuariosPatch = ( req = request,  res = response ) =>  {
  res.status(200).json( {        
    msg: 'patch Api - Controlador'
  } );
}

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch
}