const database = require('../models')


class VideoController{
    static async getAllVideos(req,res){
        try {
            const videos = await database.Videos.findAll()
            res.status(200).json(videos)
        } catch (error) {
            res.status(500).send('Internal Server Error')
        }
    }
    static async getOneVideo(req,res){
            const { id } = req.params
        try {
            const video = await database.Videos.findOne({where:{id:Number(id)}})
            res.status(200).send(video)
        } catch (error) {
            res.status(500).send('Internal Server Error')
        }
    }
    static async postVideo(req,res){
        const video = req.body
        try {
            const newVideo = await database.Videos.create(video)
            res.status(200).send(newVideo)
        } catch (error) {
            res.status(500).send('Internal Server Error')
        }
    }
    static async deleteVideo(req,res){
        const { id } = req.params
        try {
            await database.Videos.destroy({where:{id:Number(id)}})
            res.status(200).send({message:`o Video com id ${id} foi deletado com sucesso`})
        } catch (error) {
            res.status(500).send('Internal Server Error')
        }
    }
    static async updateVideo(req,res){
        const { id } = req.params
        const newData = req.body
        try {
            await database.Videos.update(newData,{where:{id:Number(id)}})
            const updatedVideo = await database.Videos.findOne({where:{id:Number(id)}})
            res.status(200).send(updatedVideo)
        } catch (error) {
            res.status(500).send('Internal Server Error')
        }
    }
}

module.exports = VideoController