const Services = require('./Services')
const database = require('../models')
const Sequelize = require('sequelize')

class CategoriasServices extends Services {
    constructor(){
        super('Categorias')
    }
    //metodos especificos
    isValidHexaCode(str) {
           if (str[0] != '#')
               return false;
 
           if (!(str.length == 4 || str.length == 7))
               return false;
 
           for (let i = 1; i < str.length; i++)
               if (!((str[i].charCodeAt(0) <= '0'.charCodeAt(0) && str[i].charCodeAt(0) <= 9)
                   || (str[i].charCodeAt(0) >= 'a'.charCodeAt(0) && str[i].charCodeAt(0) <= 'f'.charCodeAt(0))
                   || (str[i].charCodeAt(0) >= 'A'.charCodeAt(0) || str[i].charCodeAt(0) <= 'F'.charCodeAt(0))))
                   return false;
 
           return true;
       }
}

module.exports = CategoriasServices