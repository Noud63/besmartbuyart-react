const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const loginSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
},
    {
        timestamps: true
    }
)

// pre = before you save your model
// Use regular function cause of the 'this' keyword
loginSchema.pre('save', async function (next) {

    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
        next()
    } catch (error) {
        next(error)
    }
})

const Logins = mongoose.model('logins', loginSchema)

module.exports = Logins
