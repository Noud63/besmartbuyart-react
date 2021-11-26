const User = require('../models/userModel')

const registerUser = async (req, res) => {

    const { firstname, lastname, email, password, repeatpassword,
        username, address, number, telephone, city, country } = req.body
   try{
    
       const userExist = await User.findOne({ email: email })

       if (userExist) {
           res.status(400)
           throw new Error('User already exists')
       }else if(!userExist){

           //add hashed password here

           let user = new User({
               firstname, lastname, email, password, repeatpassword,
               username, address, number, telephone, city, country
           })

           user = await user.save((err, doc) => {
               if (err) return console.error(err);
               console.log("User added successfully!");
           })
           res.send(user)
       }
    }catch(error){
       console.log(error)
   }
};

module.exports = registerUser