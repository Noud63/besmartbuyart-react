const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const router = express.Router()
const path = require("path");
const colors = require('colors')
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db')
const addDataToCollection = require('./seeder')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

app.use(cors())
app.use(express.json())
dotenv.config()

connectDB()
addDataToCollection()

// app.get('/', (req, res) => {
//    console.log('Api up and running!')
// })

app.use('/artworks', require('./routes/artworkRoute'))
app.use('/users', require('./routes/registerRoute'))
app.use('/logins', require('./routes/loginRoute'))
app.use('/productinfo', require('./routes/productInfoRoute'))

//Place after routes
app.use('/', express.static(path.join(__dirname, '../frontend', 'build')))

app.get('/*', (req, res) => {
   res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
});

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, '0.0.0.0', () => {
   console.log(`Server running on port ${PORT}`.yellow)
})