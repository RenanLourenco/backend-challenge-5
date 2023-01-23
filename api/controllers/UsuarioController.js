const database = require('../models')
const UsuariosServices = require('../services/UsuariosServices')
const bcrypt = require('bcrypt')
const usuariosServices = new UsuariosServices()

class UsuariosControllers{
    static async signup(req,res){
        const credentials = {
            email:req.body.email,
            password:req.body.password
        }
        if(credentials){
            bcrypt.hash(credentials.password,10,(errBcrypt,hash) =>{
                if(errBcrypt){ return res.status(500).send({error: errBcrypt}) }
                
            })

        }
    }
}