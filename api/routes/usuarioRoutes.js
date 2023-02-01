const { Router } = require('express')
const UsuarioController = require('../controllers/UsuarioController')
const router = Router()

router
    .post('/signup',UsuarioController.signup)
    .post('/login',UsuarioController.login)


module.exports = router