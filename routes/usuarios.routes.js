const { Router } = require( 'express' );
const { usuariosGet } = require( '../controllers/usuarios.controllers' );

const router = Router();


router.get( '/', usuariosGet  );

router.put( '/', ( req, res ) => {
  res.json( {
    msg: "put Api"
  } );
} );
router.post( '/', ( req, res ) => {
  res.json( {
    msg: "post Api"
  } );
} );
router.delete( '/', ( req, res ) => {
  res.json( {
    msg: "delete Api"
  } );
} );
router.patch( '/', ( req, res ) => {
  res.json( {
    msg: "patch Api"
  } );
} );




module.exports = router;