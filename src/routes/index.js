const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({ word: 'Hello Mundo!' });
});

export default = router;