const mongoose = require('mongoose')

const infoSchema = mongoose.Schema({
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
    fullname: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    repro: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

const ProductInfos = mongoose.model('ProductInfos', infoSchema)

module.exports = ProductInfos