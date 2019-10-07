// rutas

const express = require('express');
const router = express.Router();
router.use(express.json());
const path = require('path');

//utilizaremos router para las rutas ya no app

router.get('/', (req, res) => {
    res.render('./index', { max: 15 });
    
});
router.get('/archivos.ejs', (req, res) => {
    res.render('./archivos.ejs', { max: 15 });
    
});
router.get('/inicio', (req, res) => {
    res.render('./index.ejs', { max: 15 });
    
});
router.get('/leer', (req, res) => {
    res.render('./leer.ejs', { max: 15 });
    
});















module.exports = router;
