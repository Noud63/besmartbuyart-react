const Artwork = require('./models/artworkModel')
const products = require('./data/products')

const addDataToCollection = async() => {
    try{
         await Artwork.deleteMany();
         await Artwork.insertMany(products, function(err, result){
             console.log('Data imported!'.green.inverse)
             console.log("Number of documents inserted: " + result.length);
         })
    }catch(error){
        console.log(error)
    }
}

module.exports = addDataToCollection