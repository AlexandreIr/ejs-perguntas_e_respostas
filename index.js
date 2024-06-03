const express = require("express");
const app = express();



app.get('/', (req, res)=>{
    res.render();
});

app.listen(8079, ()=>{
    console.log("Aplicação iniciadda com sucesso");
})