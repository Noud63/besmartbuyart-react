const express = require('express')
const router = express.Router()
const loginUser = require('../controllers/loginController')

router.route('/logins').post(loginUser)

module.exports = router