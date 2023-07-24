const { ObjectID } = require('bson')
const express = require('express')
// const products = require('../data/products')
const mongoose = require('mongoose')
const ProductInfos = require('../models/productInfoModel')

const getProductInfo = async(req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        const productinfo = await ProductInfos.findOne({name: id})
        res.json(productinfo)
    } catch (error) {
        console.log({ message: error.message})
    }
    
}

module.exports = getProductInfo