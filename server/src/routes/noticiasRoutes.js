import { Router } from 'express';
import Noticia from '../../models/Noticia.js';
const router = Router();

router.get('/', (req, res) => {
    Noticia.find({}, (err, noticias) => {
        res.json({ noticias });
    });
});

router.get('/create', (req, res) => {
    const noticia = new Noticia({
        titulo: 'Titulo de la noticia',
        descripcion: 'Descripcion de la noticia',
        autor: 'Autor de la noticia',
        fecha: new Date(),
        imagen: 'https://www.google.com',
        categoria: 'Categoria de la noticia',
    });
    console.log({noticia});
    noticia.save((err, noticiaDB) => {
        console.log({err});
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            noticia: noticiaDB
        });
    });

    // Noticia.insertMany([{ size: 'small' }], function(err) {

    // });
    
});

export default router;