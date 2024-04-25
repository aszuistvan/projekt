const express=require("express");
const cors=require("cors");
const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/termeklista',require('./routes/TermekRoutes'));
app.use('/api/felhasznalok',require('./routes/FelhasznaloRoutes'));
app.use('/api/kosarak', require('./routes/KosarRoutes'));

app.listen(8000,()=>{console.log("Running")});

app.get('/',(req,res)=>{
    res.send("gyorsétterem backend");
});