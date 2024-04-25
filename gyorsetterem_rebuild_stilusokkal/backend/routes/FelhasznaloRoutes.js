const express = require('express');
const router = express.Router();
const { felhasznaloBejelentkezes, felhasznaloRegister} = require('../controllers/FelhasznaloController');

router.post('/regisztracio', felhasznaloRegister);
router.post('/bejelentkezes', felhasznaloBejelentkezes);

module.exports = router;