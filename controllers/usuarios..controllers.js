const { request , response } = require('express')
const bcryptjs = require('bcryptjs')

const Usuario = require('../models/usuario.model')

const usuariosGet = ( req = request, res = response ) => {

  const {q, nombre = "No name", apikey} =req.query;

    res.status(200).json( {      
        
    msg: 'get Api - controlador ',
    q,
    nombre,
    apikey

  } );
}


const usuariosPost =async ( req = request,  res = response ) => {

  const { nombre, correo, password, rol} = req.body;
  const usuario = new Usuario({nombre, correo, password, rol});

  // verificar si el correo existe
const salt = bcryptjs.genSaltSync();


// encriptar de la contraseña
usuario.password = bcryptjs.hashSync(password, salt)


  //grabar en base de datos
 await  usuario.save();
 const resulta  = usuario

 const { password: hashedPassword, ...rest } = resulta

 

  res.status(200).json( {        
    
    rest
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