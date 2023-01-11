const bodyParser = require('body-parser')
const videos = require('../routes/videoRoutes')
const categorias = require('../routes/categoriaRoutes')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(videos)
    app.use(categorias)
}
