const express = require("express");
const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));

app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/ask", (req, res)=>{
    res.render("askPage");
})

app.listen(8079, ()=>{
    console.log("Aplicação iniciadda com sucesso");
})