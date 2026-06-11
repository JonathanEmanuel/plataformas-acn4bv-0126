import UsersManager from './Users.js';
import express from 'express'

const PORT = 5000;
const app = express();
app.use( express.json());
let count = 0;
const usersModel = new UsersManager();

app.get('/', (request, response) => {
    count++;
    console.log(`Cliente n°: ${count} .`);
    response.send('<h1>Servidor Web con Express</h1>');
})

app.get('/api/users', async (req, res) => {
    console.log('Inicio');
    try {
        const users = await usersModel.find('a');
        res.json({ status: 'success', data: users});
    } catch (error) {
        res.status(500).json({ status: 'error', data: []});
        console.error(error);
    }
    console.log('Fin');
})

app.get('/api/users/:uid', async (req, res) => {
    try {
        const { uid } =  req.params; 
        const user = await usersModel.findById(uid);

        if( user) {
            return res.json({ status: 'success', data: user});
        }
        
        return res.status(404).json({ status: 'success', data: {}});

    } catch (error) {
        res.status(500).json({ status: 'error', data: []});
        console.error(error);
    }
})

app.post('/api/users', async (req, res) => {
    try {
        const { body } = req;
        // Luego agregar validaciones
        const newUser = await usersModel.add(body);
        res.json({ status: 'success', data: newUser});

    } catch (error) {
        res.status(500).json({ status: 'error', data: []});
        console.error(error);
    }
})

app.listen(PORT, () => {
    console.log(`Servidor Web en puerto ${PORT}`);
})