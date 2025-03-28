
const  Role  = require('../models/rol.model')
const  Usuario  = require('../models/usuario.model')

const esRoleValido = async ( rol = '') => { 
    const existeRol = await Role.findOne({ rol  })
    if(!existeRol){
      throw new Error(`El rol ${rol } no se encuentra registrado`)
    }
  }
  const emailExiste = async(correo = '') =>{

      // verificar si el correo existe
      const existeEmail = await Usuario.findOne({
        correo
      })
    
      if(existeEmail){
        throw new Error(`Email ${correo} ya está registrado`);
      }
    

  }

  const existeUsuarioPorId = async(id) => {

    // verificar si el correo existe
    const existeUsuario = await Usuario.findById( id )
  
    if(!existeUsuario){
      throw new Error(`El id  ${ id } no existe`);
    }
  

}

  module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
  }