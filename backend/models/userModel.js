const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        // required: true
    },
    lastname: {
        type: String,
        // required: true
    },
    address: {
        type: String,
        // required: true
    },
    country: {
        type: String,
        // required: true
    },
    city: {
        type: String,
        // required: true
    },
    telephone: {
        type: Number,
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    number: {
        type: Number,
        // required: true
    },
    username: {
        type: String,
        // required: true
    },
    password: {
        type: String,
        // required: true
    },
    repeatpassword: {
        type: String,
        // required: true
    },
},
    {
        timestamps: true
    }
)

userSchema.pre('save', async function (next) {

    if(!this.isModified('password')) return next();
   
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        const hashedRepeatPassword = await bcrypt.hash(this.repeatpassword, salt)
        this.password = hashedPassword
        this.repeatpassword = hashedRepeatPassword
        next()
    } catch (error) {
        next(error)
    }

})


const User = mongoose.model('users', userSchema)

module.exports = User
