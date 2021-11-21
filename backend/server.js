const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const colors = require('colors')
const PORT = process.env.REACT_APP_PORT || 5000
const connectDB = require('./config/db')
const addDataToCollection = require('./seeder')
const User = require('./models/userModel')

app.use(cors())
app.use(express.json())
dotenv.config()

connectDB()

addDataToCollection()

app.get('/', (req, res) => {
   res.send('API is running!')
})

app.post('/signup', (req, res) => {
   const data = req.body
   console.log(data)
   const user = new User(data)
   user.save().then((userinfo) => {
      console.log(userinfo)
      res.send({ body: '' })
   })
})

app.use('/', require('./routes/artworkRoute'))
app.use('/', require('./routes/userRoute'))

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`.yellow)
})