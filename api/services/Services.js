const database = require('../models')

class Services {
    constructor(modelName){
        this.modelName = modelName
    }
    async getAllRegisters(){
        return database[this.modelName].findAll()
    }
    async getOneRegister(id){
        return database[this.modelName].findOne({where: {id:Number(id)}})
    }
    async getAllRegistersWithQuery(where ={}){
        return database[this.modelName].findAll({where : {...where}})
    }
    async getOneRegisterWithQuery(where = {}){
        return database[this.modelName].findAll({where: {...where}})
    }
    async registerFindAndCount(where = {},options){
        return database[this.modelName].findAndCountAll({where:{...where}, ...options})
    }
    async registerCreate(obj){
        return database[this.modelName].create(obj)
    }
    async registerRestore(id){
        return database[this.modelName].restore({where:{id:Number(id)}})
    }
    async registerRestoreWhere(where = {}){
        return database[this.modelName].restore({where:{...where}})
    }
    async registerUpdate(data,id,transacao = {}){
        return database[this.modelName].update(data,{where:{id:id}}, transacao)
    }
    async registerUpdates(data,where,transacao = {}){
        return database[this.modelName].update(data,{where: {...where} }, transacao)
    }
    async registerDelete(id){
        return database[this.modelName].destroy({where:{id:Number(id)}})
    }
}

module.exports = Services