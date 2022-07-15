const express = require('express')
const router = express.Router()
const getProductInfo = require('../controllers/productInfoController')

router.route('/').get(getProductInfo)
module.exports = router