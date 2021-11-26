const express = require('express')
const router = express.Router()
const  getArtworks = require('../controllers/artworkController')

router.route('/artworks').get(getArtworks)
module.exports =  router