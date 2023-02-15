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
const { dirname } = require('path')
// const { notFound, errorHandler } = require('./middleware/errorMiddleware')

app.use(cors())
app.use(express.json())
dotenv.config()
// app.use('/', express.static(path.join(__dirname, '/besmartbuyartreact','frontend', 'public')))
connectDB().then(() => {
   console.log(__dirname)
   app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on port ${PORT}`.yellow)
   })
})

addDataToCollection()

app.use('/artworks', require('./routes/artworkRoute'))
app.use('/users', require('./routes/registerRoute'))
app.use('/logins', require('./routes/loginRoute'))
app.use('/productinfo', require('./routes/productInfoRoute'))
app.use('/stripe', require('./routes/checkoutRoute'))


// Place after routes
// Heroku

app.use('/', express.static(path.join(__dirname, '../frontend/build')))

app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
});

//Cyclic
//Serving the frontend


// app.use(express.static(path.join(__dirname, "./frontend/build")))

// app.get("*", function(req, res){
//      res.sendFile(path.join(__dirname, "./frontend/build/index.html"),
//      function(err){
//         res.status(500).send(err)
//      }
//      )
// })

// app.use(notFound)
// app.use(errorHandler)

