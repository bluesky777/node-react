import { Router } from 'express';
import Noticia from '../models/Noticia.js';
const router = Router();

router.get('/', (req, res) => {

    const query = req.query.query ? req.query.query : '';
    const limit = req.query.limit ? { limit: req.query.limit } : {}
    const page = req.query.page ? { page: req.query.page } : {}
    const custom = query.length > 0 ? { titulo: { $regex: new RegExp(query), $options: "i" } } : {};
    console.log({ limit, page, query, custom })

    Noticia.paginate(custom, { ...page, ...limit })
        .then(noticias => res.json({ noticias }))
        .catch(error => res.status(400).json({ ok: false, error: error }));

});

router.get('/create', (req, res) => {

    const todas = []

    for (let i = 0; i < 30; i++) {

        todas.push({
            autor: `Autor ${i} de la noticia`,
            fecha: new Date(),
        })
    }

    Noticia.insertMany(todas, function (err, docs) {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        } else {
            res.json({ ok: 'creados ' + todas.length })
        }
    });

});


router.get('/remove', (req, res) => {
    const noticia = Noticia.remove({}, (err, noticiaDB) => {
        res.json({ ok: 'Todo eliminado' });
    })
});

export default router;