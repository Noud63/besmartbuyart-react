const { ObjectID } = require('bson')
const express = require('express')
// const products = require('../data/products')
const ProductInfos = require('../models/productInfoModel')

const getProductInfo = async (req, res) => {
    const id = req.params.id
    try {
        const productinfo = await ProductInfos.findById(id)
        res.json(productinfo)
    } catch (error) {
        
    }
    
}

module.exports = getProductInfo