const bodyParser = require('body-parser')
const videos = require('../routes/videoRoutes')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(videos)
}
