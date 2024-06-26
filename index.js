const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const connection = require("./db/db");
const question = require("./db/Question");
const resp = require("./db/Answer");
const { where } = require("sequelize");
const answers = require("./db/Answer");

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
    question.findAll({raw:true, order:[
        ['id','DESC']
    ]}).then((questions)=>{
        res.render("index", {
            questions:questions
        });
    });
    
});

app.get("/ask", (req, res)=>{
    res.render("askPage");
});

app.post("/ask", (req, res)=>{
    const title = req.body.title;
    const description = req.body.description;
    question.create({
        title: title,
        description: description
    }).then(()=>{
        res.redirect('/');
    });
});

app.get("/question/:id", (req, res)=>{
    const id = req.params.id;
    question.findOne({
        where:{id:id}
    }).then(question=>{
        if(question!=undefined){
            answers.findAll({
                where:{questionID: id},
                order:[["id", "DESC"]]
            }).then(ans =>{
                res.render("question",{
                    question:question,
                    answers:ans
                });
            })
        } else {
            res.redirect("/");
        }
    });
});
app.post("/question/:id", (req, res)=>{
    const id = req.params.id;
    const body = req.body.answerArea;
    answers.create({
        body:body,
        questionID:id
    }).then(()=>{
        res.redirect(`/question/${id}`);
    });
})

app.listen(port, ()=>{
    console.log(`Aplicação rodando na porta ${port}`);
});