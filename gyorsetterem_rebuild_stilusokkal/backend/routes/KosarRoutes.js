const express = require('express');
const router = express.Router();
const {getKosar} = require('../controllers/KosarController');

router.get('/kosarad/:id', getKosar);

module.exports = router;