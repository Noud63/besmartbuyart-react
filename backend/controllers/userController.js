const User = require('../models/userModel')

const registerUser = async (req, res) => {

    const { firstname, lastname, email, password, repeatpassword,
        username, address, number, telephone, city, country } = req.body
    try {

        const userExist = await User.findOne({ email: email })

        if (userExist) {
            return res.status(400).json({ error: 'Email already exist' });
        }

        let user = new User({
            firstname, lastname, email, password, repeatpassword,
            username, address, number, telephone, city, country
        })

        user = await user.save((err, doc) => {              // doc = saved user object
            if (err) return console.error(err);
            console.log("User added successfully!");
            console.log(doc)
        })
        res.send(user)

    } catch (error) {
        console.log(error)
    }
};

module.exports = registerUser