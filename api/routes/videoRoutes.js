const { Router } = require('express')
const VideoController = require('../controllers/VideoController')
const Middlewares = require('../middlewares/middlewares')
const router = Router()


router
    .get('/videos/search', VideoController.getVideoByTitulo)
    .get('/videos', VideoController.getAllVideos)
    .get('/videos/:id', VideoController.getOneVideo)
    .post('/videos',Middlewares.urlValidation,VideoController.postVideo)
    .put('/videos/:id',Middlewares.urlValidation,VideoController.updateVideo)
    .delete('/videos/:id', VideoController.deleteVideo)

module.exports = router