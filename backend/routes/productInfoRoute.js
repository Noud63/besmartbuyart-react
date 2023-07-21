const express = require('express')
const router = express.Router()
const getProductInfo = require('../controllers/productInfoController')

router.route('/:id').get(getProductInfo)
module.exports = router