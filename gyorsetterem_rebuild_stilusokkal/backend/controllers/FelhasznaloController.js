const asyncHandler = require('async-handler');
const jwt = require('jsonwebtoken');
const titkosKulcs = 'titkosKulcsxd';
const salt = 10;
const bcrypt = require('bcrypt');

const mysql = require('mysql');
const conn = mysql.createConnection({
    user:"root",
    password:"",
    database:"gyorsetterem"
});

//felhasznalo regisztracio

const felhasznaloRegister = (req,res)=>{
    const{vnev, knev, ir_szam, telepules_neve, kozterulet_neve, kozterulet_jellege, hazszam, tel_szam, felhasznalo_nev, jelszo, email_cim} = req.body;
    //jelszo titkositasa
    bcrypt.hash(jelszo, salt, function(err, hashedPassword){
        if(err){
            res.status(500).send(err);
        } else {
            conn.query(`INSERT INTO vevok (
                        vnev,
                        knev,
                        ir_szam,
                        telepules_neve,
                        kozterulet_neve,
                        kozterulet_jellege,
                        hazszam,
                        tel_szam,
                        felhasznalo_nev,
                        jelszo,
                        email_cim)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                        [vnev, knev, ir_szam, telepules_neve, kozterulet_neve, kozterulet_jellege, hazszam, tel_szam, felhasznalo_nev, hashedPassword, email_cim],
                        (err)=>{
                            if(err){
                                res.status(500).send(err);
                            } else {
                                res.status(201).json({message : "Új felhasználó regisztrálva!"});
                            }
                        });
        }
    });
}
//bejelentkezes fuggveny
const felhasznaloBejelentkezes = asyncHandler(async(req,res)=>{
    const{email_cim, jelszo} = req.body;
    console.log(email_cim, jelszo);
    conn.query(`SELECT id, jelszo FROM vevok WHERE email_cim = LOWER(?)`,
    [email_cim],
    async(err,results) =>{
        console.log(results);
        if(err){
            console.log("Hiba bejelentkezés közben")
            res.status(500).send(err)
        } else if(results.length > 0) {
            const felhasznalo = results[0];
            const match = await bcrypt.compare(jelszo, felhasznalo.jelszo);
            if(match){
                const token = jwt.sign({id:felhasznalo.id}, titkosKulcs, {expiresIn: '1h'});
                res.status(200).json({token});
            } else {
                res.status(401).json({message: "A megadott jelszó hibás!"});
            }
        } else {
            res.status(404).json({message : "A felhasználó nem található!"});
        }
    });
});

module.exports = {felhasznaloBejelentkezes, felhasznaloRegister};