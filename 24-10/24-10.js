
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))


const PORT = 8080

 {string} n1
 {string} n2
 return {object} 
function getNumbers(req) {

    const n1 = parseFloat(req.query.n1)
    const n2 = parseFloat(req.query.n2)

    if (isNaN(n1) || isNaN(n2)) {
        return { error: "Valores inválidos. Por favor, envie parâmetros n1 e n2 que sejam números." }
    }
    
    return { n1, n2 }
}

app.get('/soma', (req, res) => {
    const { error, n1, n2 } = getNumbers(req)
    let result

    if (error) {
        result = error
        return res.status(400).send({ conta: result })
    }

    const sum = n1 + n2
    result = `${n1} + ${n2} = ${sum}`
    

    res.send({ conta: result })
})


app.get('/subtracao', (req, res) => {
    const { error, n1, n2 } = getNumbers(req)
    let result

    if (error) {
        result = error
        return res.status(400).send({ conta: result })
    }

    const subtraction = n1 - n2
    result = `${n1} - ${n2} = ${subtraction}`
    
    res.send({ conta: result })
})

app.get('/multiplicacao', (req, res) => {
    const { error, n1, n2 } = getNumbers(req)
    let result

    if (error) {
        result = error
        return res.status(400).send({ conta: result })
    }

    const multiplication = n1 * n2
    result = `${n1} * ${n2} = ${multiplication}`
    
    res.send({ conta: result })
})


app.get('/divisao', (req, res) => {
    const { error, n1, n2 } = getNumbers(req)
    let result

    if (error) {

        result = error
        return res.status(400).send({ conta: result })
    }


    if (n2 === 0) {
        result = "Erro: Não é possível realizar a divisão por zero. O valor de n2 deve ser diferente de zero."
        return res.status(400).send({ conta: result })
    }

    const division = n1 / n2
    result = `${n1} / ${n2} = ${division}`
    
    res.send({ conta: result })
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}. Acesse: http://localhost:${PORT}`)
})