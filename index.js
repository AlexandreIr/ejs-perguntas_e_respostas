const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const connection = require("./db/db");
const questionsModel = require("./db/Question");
const port = 8059;

connection
.authenticate()
.then(()=>{
    console.log("Conexão feita");
})
.catch((err)=>{
    console.log(err);
})

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
    let title = req.body.title;
    res.send(`Sua pergunta ${title} foi recebida com sucesso!`);
});

app.listen(port, ()=>{
    console.log(`Aplicação rodando na porta ${port}`);
});