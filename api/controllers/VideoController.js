const database = require('../models')
const VideosServices = require('../services/VideosServices')
const videosServices = new VideosServices()

class VideoController{
    static async getAllVideos(req,res){
        try {
            const videos = await videosServices.getAllRegisters()
            return res.status(200).json(videos)
        } catch (error) {
            return res.status(500).send('Internal Server Error')
        }
    }
    static async getOneVideo(req,res){
            const { id } = req.params
        try {
            const video = await videosServices.getOneRegister(id)
            return res.status(200).send(video)
        } catch (error) {
            return res.status(500).send('Internal Server Error')
        }
    }
    static async getVideoByTitulo(req,res){
        const titulo = req.query.titulo
        try {
            const video = await videosServices.getAllRegistersWithQuery({titulo:titulo})
            if(video === null){
                return res.status(400).send({message:`Video não encontrado`})
            }
            return res.status(200).json(video)
        } catch (error) {
            return res.status(500).send('Internal server error')
        }
    }
    static async postVideo(req,res){
        const video = {
            categoriaId:req.body.categoriaId,
            titulo:req.body.titulo,
            descricao:req.body.descricao,
            url:req.body.descricao
        }
        if(video.categoriaId === null || video.categoriaId === '' || typeof video.categoriaId === "undefined")
            video.categoriaId = 1
        
        try {
            const newVideo = await videosServices.registerCreate(video)
            return res.status(200).send(newVideo)
        } catch (error) {
            return res.status(500).send('Internal Server Error')
        }
    }
    static async deleteVideo(req,res){
        const { id } = req.params
        try {
            await videosServices.registerDelete(id)
            return res.status(200).send({message:`o Video com id ${id} foi deletado com sucesso`})
        } catch (error) {
            return res.status(500).send('Internal Server Error')
        }
    }
    static async updateVideo(req,res){
        const { id } = req.params
        const newData = req.body
        try {
            await videosServices.registerUpdate(newData,id)
            const updatedVideo = await videosServices.getOneRegister(id)
            return res.status(200).send(updatedVideo)
        } catch (error) {
            return res.status(500).send('Internal Server Error')
        }
    }
}

module.exports = VideoController