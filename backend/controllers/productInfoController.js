const express = require('express')
const products = require('../data/products')
const ProductInfos = require('../models/productInfoModel')

const getProductInfo = async (req, res) => {
    const productinfos = await ProductInfos.find({})
    console.log(productinfos)
    res.send(productinfos)
}

module.exports = getProductInfo