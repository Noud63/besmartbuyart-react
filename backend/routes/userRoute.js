const express = require('express')
const asyncHandler = require('express-async-handler')
//const router = express.Router()

const User = require('../models/userModel')

const registerUser = asyncHandler(async (req, res) => {
    const { firstname,
        lastname,
        email,
        password,
        repeatpassword,
        address,
        number,
        telephone,
        city,
        country } = req.body

    const userExist = await User.findOne({ email: email })

    if (userExist) {
        res.status(400)
        throw new Error('User already exists')
    }

    let user = new User({
        firstname,
        lastname,
        email,
        password,
        repeatpassword,
        address,
        number,
        telephone,
        city,
        country
    })

    // if (user) {
        // res.status(201).json({
        //     _id: user._id,
        //     firstname: user.firstname,
        //     lastname: user.lastname,
        //     email: user.email,
        //     password: user.password,
        //     repeatpassword: user.repeatpassword,
        //     address: user.address,
        //     number: user.number,
        //     telephone: user.telephone,
        //     city: user.city,
        //     country: user.country

        // })
        await user.save((err,doc)=>{
            if (err) return console.error(err);
            console.log("Document inserted succussfully!");
        });
        //res.send(user);
    // } else {
    //     res.status(400)
    //     throw new Error('Invalid user data')
    // }
})

module.exports = registerUser