import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
//import indexRoutes from './routes/index';
import noticiasRoutes from './routes/noticiasRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

mongoose.connect('mongodb://mongo:27017/docker-node-mongo', {
    useNewUrlParser: true,
}).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hola World');
})

app.use('/api/noticias', noticiasRoutes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})