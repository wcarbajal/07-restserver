const { request, response } = require( 'express' );
const bcryptjs = require( 'bcryptjs' );


const Usuario = require( '../models/usuario.model' );



const usuariosGet = async ( req = request, res = response ) => {

 
  const {limite = 5, desde = 0} =req.query
  
  
 /*  const usuarios = await Usuario.find({
    estado: true  })
        .limit( +limite )
        .skip( +desde );

  const total = await Usuario.countDocuments({estado: true }); */
  
  const [ total, usuarios] = await Promise.all([
    Usuario.countDocuments({estado: true }),
    Usuario.find({
      estado: true  })
          .limit( +limite )
          .skip( +desde )
  ])

  res.status( 200 ).json( {

    total,
    usuarios

  } );
};


const usuariosPost = async ( req = request, res = response ) => {



  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario( { nombre, correo, password, rol } );


  /*   // verificar si el correo existe
    const existeEmail = await Usuario.findOne({
      correo
    })
  
    if(existeEmail){
      return res.status(400).json({
        msg: 'el correo ya se encuentra registrado'
      })
    }
   */

  // encriptar de la contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync( password, salt );


  //grabar en base de datos
  await usuario.save();




  res.status( 200 ).json( {

    usuario
  } );
};

const usuariosPut = async( req = request, res = response ) => {


  const  id  = req.params.id;

  const { _id, password, google, correo, ...resto } = req.body;

  //TODO: validar contra base de datos
  if ( password ) {
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync( password, salt );
  }
  const usuario = await Usuario.findByIdAndUpdate( id, resto );

  res.status( 200 ).json( {
    
    usuario
  } );
};



const usuariosDelete = async( req = request, res = response ) => {

  const{ id }= req.params

  //borramos fisicamente.

  const usuario = await Usuario.findByIdAndUpdate( id, {estado:false})

    res.status( 200 ).json( {
    
    usuario
    } );
};

const usuariosPatch = ( req = request, res = response ) => {
  res.status( 200 ).json( {
    msg: 'patch Api - Controlador'
  } );
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch
};