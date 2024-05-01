const mysql = require('mysql');
const conn = mysql.createConnection({
    user: "root",
    password: "",
    database: "gyorsetterem"
});

//ennyi bőven elég
const termekLista=(req,res)=>{
    conn.query(`SELECT termekek.termek_neve AS termek_neve,
                termek_arak.ar AS termek_ara,
                GROUP_CONCAT(COALESCE(alapanyagok.alapanyag_neve, '0') SEPARATOR ', ') AS alapanyagok
                FROM termekek 
                LEFT JOIN termek_arak ON termekek.id = termek_arak.tmk_id 
                LEFT JOIN osszetevok ON termekek.id = osszetevok.tmk_id 
                LEFT JOIN alapanyagok ON osszetevok.aag_id = alapanyagok.id
                WHERE termek_arak.zaro_datum IS NULL AND elerhetoseg IS TRUE AND termekek.id < 17
                GROUP BY termekek.termek_neve, termek_arak.ar;
`,(err,rows)=>{
        if(err){
            res.status(400).json(err);
        } else {
            res.status(200).json(rows);
        }
    })

}

const italLista = (req,res)=>{
    conn.query(`SELECT termekek.termek_neve AS termek_neve,
                termek_arak.ar AS termek_ara
                FROM termekek
                LEFT JOIN termek_arak ON termekek.id = termek_arak.tmk_id
                LEFT JOIN osszetevok ON termekek.id = osszetevok.tmk_id
                LEFT JOIN alapanyagok ON osszetevok.aag_id = alapanyagok.id
                WHERE termek_arak.zaro_datum IS NULL AND elerhetoseg IS TRUE AND termekek.id >= 17
                GROUP BY termekek.termek_neve, termek_arak.ar;`,
                (err,rows)=>{
                    if(err){
                        res.status(400).json(err);
                    } else {
                        res.status(200).json(rows);
                    }
                });
}

module.exports = {termekLista, italLista};