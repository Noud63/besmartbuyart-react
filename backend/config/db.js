const mongoose = require('mongoose')

const connectDB = async()=> {
    try{
        mongoose.set("strictQuery", false);
        const conn = await mongoose.connect(process.env.REACT_APP_DBURL)
        console.log(`MongoDB Connected: ${conn.connection.host}`.brightMagenta)
    }catch(error){
        console.error(`Error: ${error.message}`.red.bold)
        process.exit(1)
    }
}

module.exports = connectDB