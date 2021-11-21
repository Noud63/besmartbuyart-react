const express = require('express')
const asyncHandler = require('express-async-handler')
const router = express.Router()

const User = require('../models/userModel')

const registerUser = asyncHandler(async (req, res) => {
    const { name,
        email,
        password,
        repeatpassword,
        address,
        number,
        telephone,
        city,
        country } = req.body

    const userExists = await User.findOne({ email: email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password,
        repeatpassword,
        address,
        number,
        telephone,
        city,
        country
})

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            repeatpassword: user.repeatpassword,
            address: user.address,
            number: user.number,
            telephone: user.telephone,
            city: user.city,
            country: user.country
           
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

router.route('/users').get(registerUser)

module.exports = router