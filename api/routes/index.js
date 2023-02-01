const bodyParser = require('body-parser')
const videos = require('../routes/videoRoutes')
const categorias = require('../routes/categoriaRoutes')
const usuarios = require('../routes/usuarioRoutes')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(videos)
    app.use(categorias)
    app.use(usuarios)
}
