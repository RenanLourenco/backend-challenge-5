const { Router } = require('express')
const CategoriaController = require('../controllers/CategoriaController')
const Middlewares = require('../middlewares/middlewares')
const router = Router()

router
    .get('/categorias/',Middlewares.authorization,CategoriaController.getAllCategorias)
    .get('/categorias/:id/',Middlewares.authorization,CategoriaController.getCategoria)
    .get('/categorias/:id/videos',Middlewares.authorization,CategoriaController.getVideosByCategoria)
    .put('/categorias/:id/',Middlewares.authorization,CategoriaController.updateCategoria)
    .delete('/categorias/:id/',Middlewares.authorization,CategoriaController.deleteCategoria)
    .post('/categorias/',Middlewares.authorization,CategoriaController.postCategoria)


module.exports = router