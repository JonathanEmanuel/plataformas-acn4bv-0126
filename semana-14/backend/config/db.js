import mongoose from "mongoose";
const URI_DB = 'mongodb://localhost:27017/tienda';

const connectDB = async () => {
    try {
        await mongoose.connect( URI_DB);
        console.log('Conexión con la DB Ok');

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default connectDB;