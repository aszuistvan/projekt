const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const conn = mysql.createConnection({
    user:"root",
    password:"",
    database:"gyorsetterem"
});
const titkosKulcs = 'titkosKulcsxd';

//token dekodolas felhasznalashoz (kelleni fog sokszor)
const decodeToken = (req) => {
    const token = req.headers.authorization.split(' ')[1]; // A 'Bearer' szó után következő token
    try {
        // A titkos kulcs, amit a token generalasakor hasznaltunk
        const dekodoltToken = jwt.verify(token, titkosKulcs);
        return dekodoltToken;
    } catch (err) {
        console.log("Hiba!", err)
    }
}

// Kosár tartalmának lekérdezése
const getKosar = (req, res) => {
    const dekodoltToken = decodeToken(req);
    if (dekodoltToken) {
        const email_cim = decodedToken.felhasznalo_nev;
        const id = decodedToken.id;
        conn.query('SELECT * FROM kosarak WHERE id = ?', [id], (err, rows) => {
            if (err) {
                res.status(400).json(err);
            }
            res.status(200).json(rows);
        });
    } else {
        res.status(401).json({ message: 'A token invalid' });
    }
}

const deleteFromKosar = (req, res) => {
    const dekodoltToken = decodeToken(req);
    const termek = req.body.termek;
    if (dekodoltToken) {
        const email_cim = decodedToken.felhasznalo_nev;
        const id = decodedToken.id;
        conn.query('DELETE ? FROM kosarak WHERE id = ?', [termek, id], (err, rows) => {
            if (err) {
                res.status(400).json(err);
            }
            res.status(200).json(rows);
        });
    } else {
        res.status(401).json({ message: 'A token invalid' });
    }
}

module.exports = {getKosar};