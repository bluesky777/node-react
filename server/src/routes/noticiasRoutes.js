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
        imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elmundo.es%2Fcultura%2Fnoticias%2F2018%2F11%2F12%2Fnoticia-de-la-fuerza-de-la-futbol-de-la-seleccion-de-espana-se-vuelve-a-la-seleccion-de-espana-en-el-mundo-futbol-2018-11-12-1544290900.html&psig=AOvVaw2X_Z_X_X_X_X_X_X&ust=1544290901086000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDyq-_6-gCFQAAAAAdAAAAABAD',
        categoria: 'Categoria de la noticia',
    });
    noticia.save((err, noticiaDB) => {
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