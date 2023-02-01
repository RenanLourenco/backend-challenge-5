const database = require('../models')
const UsuariosServices = require('../services/UsuariosServices')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const usuariosServices = new UsuariosServices()

class UsuariosControllers{
    static async signup(req,res){
        let credentials = {
            email:req.body.email,
            password:req.body.password
        }
        const verify = await usuariosServices.getUserByEmail(credentials.email)
        console.log(typeof verify)
        if(typeof verify === null){return res.status(401).send({message:`Usuário ja cadastrado`})}
        bcrypt.hash(credentials.password,10, async (errBcrypt,hash) =>{
            if(errBcrypt){ return res.status(500).send({error: errBcrypt})}
            credentials.password = hash
            try {
                const newUser = await usuariosServices.registerCreate(credentials)
                return res.status(201).send({message:`Usuário registrado com sucesso!`})
            } catch (error) {
                return res.status(500).send({message:`Erro ao cadastrar: ${error.message}`})
            }
                 
        })
           
        
    }
    static async login(req,res){
        let credentials = {
            email:req.body.email,
            password:req.body.password
        }
        const verify = await usuariosServices.getUserByEmail(credentials.email)
        if(typeof verify === null){return res.status(401).send({message:`Falha na autenticação`})}
        bcrypt.compare(credentials.password,verify.password, async(error,result) => {
            if(error){
                return res.status(401).send({message:`Falha na autenticação`})
            }
            if(result){
                const token = jwt.sign({
                    id:verify.id,
                    email:verify.email
                },process.env.JWT_SECRET, {expiresIn: "1h"})
                return res.status(200).send({message:`Autenticado com sucesso`,token:token})
            }
            return res.status(500).send({message:`Falha na autenticação`})

        })
    }
}

module.exports = UsuariosControllers