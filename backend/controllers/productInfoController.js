const express = require('express')
const ProductInfos = require('../models/productInfoModel')

const getProductInfo = async (req, res) => {
    const productinfos = await ProductInfos.find({})
    res.send(productinfos)
}

module.exports = getProductInfo