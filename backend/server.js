const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const router = express.Router()
const colors = require('colors')
const PORT = process.env.REACT_APP_PORT || 5000
const connectDB = require('./config/db')
const addDataToCollection = require('./seeder')

app.use(cors())
app.use(express.json())
dotenv.config()


connectDB()
addDataToCollection()

// app.get('/', (req, res) => {
//       req.body.name = 'Noud'
//       req.body.age = 58
//       const { name, age } = req.body
//       console.log(req.body)
//       res.send(`This persons name is ${name}, and he is ${age} years old.`)
// })

app.use('/', require('./routes/artworkRoute'))
app.use('/', require('./routes/registerRoute'))
app.use('/', require('./routes/loginRoute'))

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`.yellow)
})