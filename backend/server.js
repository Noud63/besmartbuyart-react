const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const colors = require('colors')
const router = express.Router()
const PORT = process.env.REACT_APP_PORT || 5000
const connectDB = require('./config/db')
const addDataToCollection = require('./seeder')
const registerUser = require('./routes/userRoute')

app.use(cors())
app.use(express.json())
dotenv.config()


connectDB()
addDataToCollection()

app.get('/', (req, res) => {
   console.log('API is running....')
})

router.route('/users').post(registerUser)

app.use('/', require('./routes/artworkRoute'))
app.use('/', registerUser)

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`.yellow)
})