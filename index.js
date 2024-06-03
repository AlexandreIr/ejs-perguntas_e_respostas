const express = require("express");
const app = express();
const bodyparser = require("body-parser");

app.set('view engine','ejs');
app.use(express.static('public'));

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/ask", (req, res)=>{
    res.render("askPage");
});

app.post("/ask", (req, res)=>{
    res.send("Pergunta recebida com sucesso!");
});

app.listen(8079, ()=>{
    console.log("Aplicação iniciadda com sucesso");
});