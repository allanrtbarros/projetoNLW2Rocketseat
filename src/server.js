const proffys = [
    {
        name: "Diego Fernandes" ,
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
        whatsapp: "111111111" ,
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas atraves de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões" ,
        subjetc: "Química" ,
        cost: "20" ,
        weekday: [0],
        time_from: [720],
        time_to: [1220],
    },

    {
        name: "Mark Brito" ,
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: "111111111" ,
        bio: "Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar.<br><br>Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: Aprenda a fazer dinheiro com isso!",
        subjetc: "Educação Física",
        cost: "25" ,
        weekday: [1],
        time_from: [720],
        time_to: [1220],
    }
]

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    return res.render("study.html", { proffys })
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html")
}

const express = require('express')
const server = express()

const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

server.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)  
.get("/give-classes", pageGiveClasses)
.listen(5500)