import connectDB from './config/db.js';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import express from 'express';
import { productModel } from './models/productModel.js';
import { userModel } from './models/userModel.js';
const PORT = 5000;
const SECRET_KEY = 'claveSecreta';
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

/* USER */
app.post('/api/users/register', async (req, res) => {
    try {

        const { name, email, password } = req.body;
        const existUser = await userModel.findOne({ email });
        if (existUser) {
            return res.status(400).json({
                status: 'error',
                message: 'El usuario ya existe'
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });
        const user = await newUser.save();
        res.status(201).json({
            status: 'success',
            data: user
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'error'
        });
    }
});

app.post('/api/users/login', async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(401).json({
                status: 'error',
                message: 'Credenciales inválidas'
            });
        }

        const isValidPassword = await bcrypt.compare(
            password,
            user.password
        );

        if (!isValidPassword) {
            return res.status(401).json({
                status: 'error',
                message: 'Credenciales inválidas'
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            SECRET_KEY,
            {
                expiresIn: '1h'
            }
        );

        res.json({
            status: 'success',
            token
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            status: 'error'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor Web en puerto ${PORT}`);
})