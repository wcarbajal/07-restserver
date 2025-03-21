
/**
* @type {mongoose.SchemaDefinitionProperty}
*/
const { Schema, model } = require('mongoose');


const UsuarioSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio']
  },
  correo: {
    type: String,
    required: [true, 'El correo es obligatorio'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'la contraseña es obligatoria']    

    }
})