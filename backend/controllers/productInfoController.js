const express = require('express')
const ProductInfos = require('../models/productInfoModel')

const getProductInfo = async (req, res) => {
    try {
        const productinfos = await ProductInfos.find({})
        console.log(productinfos)
        res.send(productinfos)
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = getProductInfo