const ProductInfos = require('./models/productInfoModel')
const products = require('./data/productsextra')

const addDataToCollection = async () => {
    try {
        await ProductInfos.deleteMany();
        await ProductInfos.insertMany(products, function (err, result) {
            console.log('Data imported!'.green.inverse)
            console.log("Number of documents inserted: " + result.length);
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = addDataToCollection