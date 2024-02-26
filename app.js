const express = require("express")
const app = express()

var porta = 8081

app.listen(porta, function(){
    console.log("Servidor Ativo!")
    console.log("Rodando na porta "+porta)
})

app.get("/", function(req, res){
    res.send("Node JS")
})

app.get("/cadastrar/:item/:item2/:item3", function(req, res){
    res.send(req.params.item +'<br>'+ req.params.item2 + '<br>' + req.params.item3)
})

app.get("/contato", function(req, res){
    res.send("Alguma coisa")
})
