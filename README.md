# rest-api - The simplest RESTful API server using Node.js and Express framework
## RESTful API using the Express framework.
The REST API server has the following four endpoints:

1. GET /accounts to retrieve a list of accounts
2. POST /accounts to create a new account
3. PUT /accounts/:id to update an account
4. DELETE /accounts/:id to remove an account

The server stores data in-memory, i.e., NO data is available after starting the server; it must me POSTed.

Data must be sent as JSON and is stored in an array of JSON objects.

For PUT & DELETE, id is the index of the object to update or delete