const express       = require('express')
const bodyParser    = require("body-parser")
const morgan        = require('morgan')
const errorHandler  = require('errorhandler')

const port = 3000

let store = {}
store.accounts = []

let app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(errorHandler())

// Define CRUD - Create, Read, Update, Delete operations
app.post("/accounts", (request, response) => {
  let newAccount = request.body
  let id = store.accounts.length

  store.accounts.push(newAccount)
  response.status(201).send({id: id})
})

app.get("/accounts", (request, response) => {
  response.status(200).send(store.accounts)
})

app.put("/accounts/:id", (request, response) => {
  store.accounts[request.params.id] = request.body
  response.status(200).send(store.accounts[request.params.id])
})

app.delete("/accounts/:id", (request, response) => {
  store.accounts.splice(request.params.id, 1)
  response.status(204).send()
})

app.listen(port)

console.log(`Express server listening on port ${port}`)
console.log("Express server listening on port", port)
console.log("Express server listening on port %d", port)