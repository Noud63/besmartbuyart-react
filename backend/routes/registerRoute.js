const express = require('express')
const router = express.Router()
const registerUser = require('../controllers/userController')

router.route('/users').post(registerUser)

module.exports = router