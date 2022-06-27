const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

const registerUser = asyncHandler(async (req, res) => {

    const { firstname, lastname, email, password,
        username, address, number, telephone, city, zip, country } = req.body

        const userExist = await User.findOne({ email: email })

        if (userExist) {
            return res.status(400).json({ error: 'User already exist' });
        }

        let user = await User.create({
            firstname, 
            lastname, 
            email, 
            password, 
            username, 
            address, 
            number, 
            telephone, 
            city, 
            zip, 
            country
        })

        if (user) {
            res.status(201).json({
                _id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                password: user.password,
                username: user.username,
                address: user.address,
                number: user.number,
                telephone: user.telephone,
                city: user.city,
                zip: user.zip,
                country: user.country,
                token: generateToken(user._id),
            })
        } else {
            res.status(400)
            throw new Error('Invalid user data')
        }

        console.log(user)
});

//Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = registerUser