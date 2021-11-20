const express = require('express')
const asyncHandler = require('express-async-handler')

const router = express.Router()

const Artwork = require('../models/artworkModel')

const getArtworks = asyncHandler(async (req, res) => {
    const artworks = await Artwork.find({})
    res.send(artworks)
})

router.route('/artworks').get(getArtworks)

module.exports = router