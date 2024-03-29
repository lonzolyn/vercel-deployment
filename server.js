const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const personController = require('./controllers/Person')

const app = express()

//middlewares
app.use(express.json)

//routes
app.use('/people', personController)

//database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
     .then(() => console.log('Db connected'))
     .catch(err => console.error(err));

const PORT = process.env.PORT

app.listen(PORT, console.log('listening on port ${PORT}'))// npx nodemon index.js

module.exports = app