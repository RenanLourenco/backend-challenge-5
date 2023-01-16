const { Router } = require('express')
const CategoriaController = require('../controllers/CategoriaController')
const router = Router()

router
    .get('/categorias/',CategoriaController.getAllCategorias)
    .get('/categorias/:id/',CategoriaController.getCategoria)
    .get('/categorias/:id/videos',CategoriaController.getVideosByCategoria)
    .put('/categorias/:id/',CategoriaController.updateCategoria)
    .delete('/categorias/:id/',CategoriaController.deleteCategoria)
    .post('/categorias/',CategoriaController.postCategoria)


module.exports = router