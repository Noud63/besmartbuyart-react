const Logins = require('../models/loginModel')
const User = require('../models/userModel')
const bcrypt = require('bcrypt')

const loginUser = async (req, res) => {
    const { username, password } = req.body
    try {

        const userExist = await User.findOne({ username: username})

        const isMatch = await bcrypt.compare(password, userExist.password)

        if (!isMatch) {
            res.status(400)
            res.send('Invalid username or password!')
        } else if (isMatch) {
            //add hashed password here

            let logins = new Logins({
                username, password
            })

            logins = await logins.save((err, doc) => {
                if (err) return console.error(err);
                console.log("Login successful!");
            })
            res.send(logins)
        }
    } catch (error) {
        console.log(error)
    }
};

module.exports = loginUser