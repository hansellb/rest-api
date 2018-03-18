const express       = require('express')
const bodyParser    = require("body-parser")
const morgan        = require('morgan')
const errorHandler  = require('errorhandler')
const routes        = require('./routes')

const port = 3000

// Define the in-memory storage
let store = {
  posts: [
    {
    	name: 'Top 10 ES6 Features every Web Developer must know',
    	url: 'https://webapplog.com/es6',
    	text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
    	comments: [
      	{text: 'Cruel…..var { house, mouse} = No type optimization at all'},
      	{text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.'},
      	{text: '(p1,p2)=>{ … } ,i understand this ,thank you !'}
    	]
    }
  ]
}

let app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(errorHandler())

// Use in-memory storage and add it to the "request" object to make it available
app.use((req, res, next) => {
  req.store = store
  next()
})

// Define all endpoints
// GET and POST /posts
app.post("/posts", routes.posts.addPost)
app.get("/posts", routes.posts.getPosts)

// PUT and DELETE /posts/:postId
app.put("/posts/:postId", routes.posts.updatePost)
app.delete("/posts/:postId", routes.posts.removePost)


// GET and POST /posts/:postId/comments
app.get("/posts/:postId/comments", routes.comments.getComments)
app.post("/posts/:postId/comments", routes.comments.postComment)

// PUT and DELETE /posts/:postId/comments/:commentId
app.put("/posts/:postId/comments/:commentId", routes.comments.putComment)
app.delete("/posts/:postId/comments/:commentId", routes.comments.deleteComment)



// Start the server
app.listen(port)

console.log(`Express server listening on port ${port}`)
console.log("Express server listening on port", port)
console.log("Express server listening on port %d", port)