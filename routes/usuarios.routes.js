const { Router } = require( 'express' );
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require( '../controllers/usuarios.controllers' );
const { body } = require( 'express-validator' );

const router = Router();


router.get( '/', usuariosGet );

router.put( '/', usuariosPut );

router.post( '/', [
  body( 'nombre' ).isEmail()
],  usuariosPost );

router.delete( '/', usuariosDelete );

router.patch( '/', usuariosPatch );

module.exports = router;