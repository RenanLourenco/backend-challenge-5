const database = require('../models')
const CategoriasServices = require('../services/CategoriasServices')
const VideosServices = require('../services/VideosServices')
const videosServices = new VideosServices()
const categoriasServices = new CategoriasServices()


class CategoriaController{
    static async getAllCategorias(req,res){
        try {
            const categorias = await categoriasServices.getAllRegisters()
            return res.status(200).json(categorias)
        } catch (error) {
            return res.status(500).send('Internal Server Error')
        }
    }
    static async getCategoria(req,res){
       const { id } = req.params
        try {
            const categoria = await categoriasServices.getOneRegister(id)
            return res.status(200).json(categoria)
        } catch (error) {
            return res.status(500).send('Internal Server Error')
        }
    }
    static async getVideosByCategoria(req,res){
        const { id } = req.params
        try {
            const video = await videosServices.getOneRegisterWithQuery({categoriaId:Number(id)})
            return res.status(200).json(video)
        } catch (error) {
            return res.status(500).send('Internal Server Error')
        }
    }
    static async updateCategoria(req,res){
        const { id } = req.params
        const newInfo = req.body
        try {
            await categoriasServices.registerUpdate(newInfo,id)
            const updatedPerson = await categoriasServices.getOneRegister(id)
            return res.status(200).json(updatedPerson)
        } catch (error) {
            return res.status(500).send('Internal Server Error')
        }
    }
    static async deleteCategoria(req,res){
        const { id } = req.params
        try {
            await categoriasServices.registerDelete(id)
            return res.status(200).send({message:`Categoria com o ID: ${id} foi deletado com sucesso`})
        } catch (error) {
            return res.status(500).send('Internal Server Error')
        }
    }
    static async postCategoria(req,res){
        const categoria = {
            titulo: req.body.titulo,
            cor: req.body.cor
        }
        try {
            const colors = ['aqua','cyan','black','blue','fuchsia','magenta','gray','green','lime','maroon','navy','olive','purple','red','silver','teal','white','yellow']
            const isHexCode = await categoriasServices.isValidHexaCode(categoria.cor)
            const isColorStringValid = colors.includes(categoria.cor) ? true : false
            if(!isHexCode && !isColorStringValid){
                return res.status(400).send({message:`A cor da categoria não é valida`})
            }
            const newCategoria = await categoriasServices.registerCreate(categoria)
            return res.status(201).json(newCategoria)
        } catch (error) {
            if(!categoria.titulo || !categoria.cor)
                return res.status(400).send({message:`Todos os campos são obrigatórios`})
            else
                return res.status(500).send('Internal Server Error')
        }
    }

}

module.exports = CategoriaController