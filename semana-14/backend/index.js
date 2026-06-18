import connectDB from './config/db.js';
import cors from 'cors';
import express from 'express'
import { productModel } from './models/productModel.js';
const PORT = 5000;
const app = express();
app.use( express.json());
app.use( cors());

connectDB();


app.get('/', (request, response) => {
    response.send('<h1>Servidor Web con Express</h1>');
})

app.get('/api/products', async (req, res) => {
    try {
        const products = await productModel.find();
        res.json({ status: 'success', data: products});
    } catch (error) {
        res.status(500).json({ status: 'error', data: []});
        console.error(error);
    }
})

app.get('/api/products/:uid', async (req, res) => {
    try {
        const { uid } =  req.params; 
        const product = await productModel.findById(uid);

        if( product) {
            return res.json({ status: 'success', data: product});
        }
        
        return res.status(404).json({ status: 'success', data: {}});

    } catch (error) {
        res.status(500).json({ status: 'error', data: []});
        console.error(error);
    }
})

app.post('/api/products', async (req, res) => {
    try {
        const { body } = req;
        // Luego agregar validaciones
        const newProduct = new productModel(body);
        const data = await newProduct.save();
        res.json({ status: 'success', data: data});

    } catch (error) {
        res.status(500).json({ status: 'error', data: []});
        console.error(error);
    }
})

app.delete('/api/products/:uid', async (req, res) => {
    try {
        const { uid } =  req.params; 
        const product = await productModel.findByIdAndDelete(uid);

        if( product) {
            return res.json({ status: 'success', data: product});
        }
        
        return res.status(404).json({ status: 'success', data: {}});

    } catch (error) {
        res.status(500).json({ status: 'error', data: []});
        console.error(error);
    }
})

app.put( '/api/products/:uid', async (req, res) => {
     try {
        const { uid } =  req.params; 
        const { body } = req;

        const product = await productModel.findByIdAndUpdate(uid, body);
        if( product) {
            return res.json({ status: 'success', data: product});
        }
        
        return res.status(404).json({ status: 'success', data: {}});

    } catch (error) {
        res.status(500).json({ status: 'error', data: []});
        console.error(error);
    }
})

app.listen(PORT, () => {
    console.log(`Servidor Web en puerto ${PORT}`);
})