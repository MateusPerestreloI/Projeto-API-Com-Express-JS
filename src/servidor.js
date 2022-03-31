const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (request, response, next) => {
    response.send({ nome: 'Notebook', preco: 123.45 }) // Converter para JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})