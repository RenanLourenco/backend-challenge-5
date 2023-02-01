const { Router } = require('express')
const VideoController = require('../controllers/VideoController')
const Middlewares = require('../middlewares/middlewares')
const router = Router()


router
    .get('/videos/search',Middlewares.authorization,VideoController.getVideoByTitulo)
    .get('/videos',Middlewares.authorization,VideoController.getAllVideos)
    .get('/videos/:id',Middlewares.authorization,VideoController.getOneVideo)
    .post('/videos',Middlewares.authorization,Middlewares.urlValidation,VideoController.postVideo)
    .put('/videos/:id',Middlewares.authorization,Middlewares.urlValidation,VideoController.updateVideo)
    .delete('/videos/:id',Middlewares.authorization,VideoController.deleteVideo)

module.exports = router