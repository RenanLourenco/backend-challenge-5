

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
    
}

module.exports = Middlewares