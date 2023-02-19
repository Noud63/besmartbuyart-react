const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const router = express.Router()
const path = require('path');
const colors = require('colors')
const PORT = process.env.REACT_APP_PORT || 5000
const connectDB = require('./config/db')
const addDataToCollection = require('./seeder')
const fs = require('fs')
// const { notFound, errorHandler } = require('./middleware/errorMiddleware')


app.use(cors())
app.use(express.json())
dotenv.config()


connectDB().then(() => {
   app.listen(process.env.REACT_APP_PORT, () => {
      console.log(`Server running on port ${process.env.REACT_APP_PORT}`.yellow)
   })
})


addDataToCollection()

app.use('/artworks', require('./routes/artworkRoute'))
app.use('/users', require('./routes/registerRoute'))
app.use('/logins', require('./routes/loginRoute'))
app.use('/productinfo', require('./routes/productInfoRoute'))
app.use('/stripe', require('./routes/checkoutRoute'))


// Place after routes
// Cyclic, Render => Serving the frontend
app.use('/', express.static(path.join(__dirname, '../frontend', 'build')))

app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
});

// app.use(notFound)
// app.use(errorHandler)