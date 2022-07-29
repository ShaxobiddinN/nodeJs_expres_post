
const express = require('express')
const path = require('path')
const app = express()
const port = 9001

let todoList = []

app.use(express.static('public'))
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.post('/register', (req,res) => {
    todoList.push({
        todoInput: req.body['todo-input']
    })
    res.redirect('/toList')
})

app.get('/toList', (req,res) =>{
    let response = ""
    for(let i=0; i<todoList.length; i++){
        response += `<input type="checkbox" id="1"><label for="1">` + todoList[i].todoInput + `</label><br>`
    }

    res.send(response)
})

app.listen(port, () => {
    console.log('Listening on port', port)
})