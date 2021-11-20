const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const colors = require('colors')
const PORT = process.env.REACT_APP_PORT || 5000
const connectDB = require('./config/db')
const addDataToCollection = require('./seeder')

app.use(cors())
app.use(express.json())
dotenv.config()

connectDB()
addDataToCollection()

app.use('/', require('./routes/artworkRoute'))

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}` .yellow)
})