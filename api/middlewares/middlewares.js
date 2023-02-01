const jwt = require('jsonwebtoken')

class Middlewares{
    static urlValidation(req,res,next){
        if(req.body.url){
            const yturl = req.body.url
            const regex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/
            const result = regex.test(yturl)
            console.log(result)
            if(result === true){
                return next()
            }else{
                return res.status(400).send({message:`Vídeo invalido, verifique url`})
            }
        }else{
            return next()
        }
        
    }
    static authorization(req,res,next){
        try {
            const token = req.headers.authorization.split(' ')[1]
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.usuario = decode
            next()
        } catch (error) {
            return res.status(400).send({message:`Token inválido`})
        }
    }
    
}

module.exports = Middlewares