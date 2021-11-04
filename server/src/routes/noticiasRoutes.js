import { Router } from 'express';
import Noticia from '../../models/Noticia.js';
const router = Router();

router.get('/', (req, res) => {
    // Noticia.find({}, (err, noticias) => {
    //     res.json({ noticias });
    // });
    console.log('=====>', req.query.query)
    Noticia.paginate(
        { title: { $regex: new RegExp(req.query.query), $options: "i" } }, 
        { offset: req.query.offset, limit: req.query.limit })
        .then(noticias => res.json({ noticias }))
        .catch(error => res.status(400).json({ ok: false, error: error }));

});

router.get('/create', (req, res) => {
    const noticia = new Noticia({
        autor: 'Autor de la noticia',
        fecha: new Date(),
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


router.get('/remove', (req, res) => {
    const noticia = Noticia.remove({}, (err, noticiaDB) => {
        res.json({ ok: 'Todo eliminado' });
    })
});

export default router;