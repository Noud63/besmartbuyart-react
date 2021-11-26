const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        // required: false
    },
    lastname: {
        type: String,
        // required: false
    },
    address: {
        type: String,
        // required: false
    },
    country: {
        type: String,
        // required: false
    },
    city: {
        type: String,
        // required: false
    },
    telephone: {
        type: Number,
        // required: false
    },
    email: {
        type: String,
        // required: false
    },
    number: {
        type: Number,
        // required: false
    },
    username: {
        type: String,
        // required: false
    },
    password: {
        type: String,
        // required: false
    },
    repeatpassword: {
        type: String,
        // required: false
    },
},
    {
        timestamps: false
    }
)

const User = mongoose.model('users', userSchema)

module.exports = User
