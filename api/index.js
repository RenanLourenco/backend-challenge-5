const express = require('express')
const routes = require('./routes')
const app = express()
require('dotenv').config()
routes(app);
module.exports = app