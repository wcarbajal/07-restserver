const { Router } = require('express')  ;
const {check} = require('express-validator');

const { validarCampos } = require( '../middlewares/validar-campos' );
const { esRoleValido, emailExiste, existeUsuarioPorId } = require( '../helpers/db-validators' );
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch } = require( '../controllers/usuarios..controllers' );


const router = Router();


router.get( '/',  usuariosGet );

router.put( '/:id', [
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom( existeUsuarioPorId ),
  check('rol').custom( esRoleValido ),
  check('nombre', 'El nombre debe de ser más de 3 caracteres, verifique').isLength({ min:3}), 
  check('correo', 'El correo no es correcto, verifique').isEmail(),
  validarCampos
],  usuariosPut);

router.post( '/', [
  check('nombre', 'El nombre debe de ser más de 3 caracteres, verifique').isLength({ min:3}), 
  check('password', 'El password debe de ser más de 6 caracteres, verifique').isLength({ min: 6}), 
  check('correo', 'El correo no es correcto, verifique').isEmail(),
  check('correo').custom( emailExiste),
  check('rol').custom( esRoleValido ),
  //check('rol', 'No es un rol válido, verifique').isIn(['ADMIN_ROLE', 'USER_ROLE']), 
  validarCampos
  ], usuariosPost );

router.delete( '/', usuariosDelete );

router.patch( '/',usuariosPatch );

module.exports = router