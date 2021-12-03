const mongoose = require('mongoose')

const artworkSchema = mongoose.Schema({
    artNr: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    technique: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    instock: {
        type: Number,
        required: true
    },
    imgSrc: {
        type: String,
        required: true
    },
    imgBig: {
        type: String,
        required: true
    },
    numberOfUnits: {
        type: Number,
        required: true
    },
    like: {
        type: Boolean,
        required: true
    },
},
    {
        timestamps: true
    }
)

const Artwork = mongoose.model('artworks', artworkSchema)

module.exports = Artwork
