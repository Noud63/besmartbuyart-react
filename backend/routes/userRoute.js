const asyncHandler = require('express-async-handler')
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
    await user.save((err, doc) => {
        if (err) return console.error(err);
        console.log("Document inserted succussfully!");
    });
})

module.exports = registerUser