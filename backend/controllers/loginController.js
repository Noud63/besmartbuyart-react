const Logins = require('../models/loginModel')
const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')


//@description    User authentication
//@route          POST /logins
//@access         Public
const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body

    const userExist = await User.findOne({ username: username })

    if (!userExist) {
        console.log("Failed to login! Invalid username or password!");
        return res.status(401).json({ message: 'User doesn\'t exist!' })
    }

    if (userExist && (await bcrypt.compare(password, userExist.password))) {
        let login = await Logins.create({
            id: userExist._id,
            username: userExist.username,
            password: userExist.password
        })

        const loggedInUser = {
            firstname: userExist.firstname,
            lastname: userExist.lastname,
            address: userExist.address,
            number: userExist.number,
            city: userExist.city,
            country: userExist.country,
            zip: userExist.zip,
            telephone: userExist.telephone,
            email: userExist.email,
            token: generateToken(userExist._id)
        }

        return res.status(200).json({ login, loggedInUser })

    } else {
        res.status(400)
        return res.json({ message: 'Invalid credentials!' })
        //throw new Error('Invalid username or password!')
    }
});

//Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = loginUser