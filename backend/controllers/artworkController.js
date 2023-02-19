const express = require('express')
const Artwork = require('../models/artworkModel')

const getArtworks = async (req, res) => {
    const artworks = await Artwork.find({})
    console.log(artworks)
    res.send(artworks)
}

module.exports = getArtworks