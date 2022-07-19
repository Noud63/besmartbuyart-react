const express = require('express')
const ProductInfo = require('../models/productInfoModel')

const getProductInfo = async (req, res) => {
    try {
        const productinfo = await ProductInfo.find({})
        console.log(productinfo)
        res.send(productinfo)
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = getProductInfo