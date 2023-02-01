const Services = require('./Services')
const database = require('../models')
const Sequelize = require('sequelize')

class UsuariosServices extends Services {
    constructor(){
        super('Usuarios')
    }
    async getUserByEmail(email){
        return database[this.modelName].findOne({where:{email:email}})
    }
}

module.exports = UsuariosServices