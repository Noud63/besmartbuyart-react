const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
    username: {
        type: String
        // required: true
    },
    password: {
        type: String
        // required: true
    },
},
    {
        timestamps: true
    }
)

const Logins = mongoose.model('logins', loginSchema)

module.exports = Logins
