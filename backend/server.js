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

app.post('/users', async (req, res) => {
   let { firstname, lastname, email, password, repeatpassword,
      address, number, telephone, city, country } = req.body

   try {
      let user = await User.findOne({ email: email })

      if (user) {
         res.status(400)
         throw new Error('User already exists')
      }
      user = new User({
         firstname, lastname, email, password,repeatpassword, address, 
         number, telephone, city, country
      })

      user = await user.save();
      res.send(user);

   } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
   }

})

app.use('/', require('./routes/artworkRoute'))
app.use('/', require('./routes/userRoute'))

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`.yellow)
})