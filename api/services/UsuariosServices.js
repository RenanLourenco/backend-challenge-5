const Services = require('./Services')
const database = require('../models')
const Sequelize = require('sequelize')

class UsuariosServices extends Services {
    constructor(){
        super('Usuarios')
    }
}

modules.exports = UsuariosServices