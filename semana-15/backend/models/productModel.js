import mongoose from "mongoose";
const collection = 'products';

const schema = new mongoose.Schema({
    name: String,
    price: Number
})

export const productModel = mongoose.model(collection, schema);