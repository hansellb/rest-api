# rest-api - The simplest RESTful API server using Node.js and Express framework
## simple - RESTful API using the Express framework.
The REST API server has the following four endpoints:

1. GET /accounts to retrieve a list of accounts
2. POST /accounts to create a new account
3. PUT /accounts/:id to update an account
4. DELETE /accounts/:id to remove an account

The server stores data in-memory, i.e., NO data is available after starting the server; it must me POSTed.

Data must be sent as JSON and is stored in an array of JSON objects.

For PUT & DELETE, id is the index of the object to update or delete

## blog - RESTful API with blog like features (managing posts and comments in posts) using the Express framework.
The express application has the following REST API endpoints:

GET and POST /posts
PUT and DELETE /posts/:postId/
GET and POST /posts/:postId/comments
PUT and DELETE /posts/:postId/comments/:commentId

The RESTful API endpoints are modularized, i.e., they reside in different folders/files from the main express server. One file with "posts" APIs and another for "comments" APIs.

Both "posts" and "comments" APIs are merged into one module with is used in the main express server app.