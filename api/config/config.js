require('dotenv').config()
const username = process.env.DATABASE_USERNAME
const password = process.env.DATABASE_PASSWORD;

const config = {
  "development": {
    "username": username,
    "password": password,
    "database": "aluraflix",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": username,
    "password": password,
    "database": "aluraflix",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": username,
    "password": password,
    "database": "aluraflix",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

module.exports = config