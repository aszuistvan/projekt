const express = require('express');
const router = express.Router();
const {termekLista, italLista} = require('../controllers/TermekController');

router.get('/', termekLista);
router.get('/italok', italLista);

module.exports = router;