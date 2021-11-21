const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    telephone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    repeatpassword: {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    }
)

const User = mongoose.model('users', userSchema)

module.exports = User
