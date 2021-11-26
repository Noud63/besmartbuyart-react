const Logins = require('../models/loginModel')
const User = require('../models/userModel')

const loginUser = async (req, res) => {
    const { username, password } = req.body
    try {

        const userExist = await User.findOne({ username: username, password: password })

        if (!userExist) {
            res.status(400)
            res.send('Invalid username or password!')
        } else if (userExist) {
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