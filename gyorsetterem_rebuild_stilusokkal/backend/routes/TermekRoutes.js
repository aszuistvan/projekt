const express = require('express');
const router = express.Router();
const {termekLista} = require('../controllers/TermekController');

router.get('/', termekLista);

module.exports = router;