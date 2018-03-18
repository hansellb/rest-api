module.exports = {
	// GET method
	getPosts(req, res) {
		res.status(200).send(req.store.posts)
	},

	// POST method
	addPost(req, res) {
		let newPost = req.body
		let postId = req.store.posts.length
		req.store.posts.push(newPost)
    res.status(201).send({postId: postId})
	},

	// PUT method
	updatePost(req, res) {
		// COMPLETELY replace all object's elements
		//req.store.posts[req.params.postId] = req.body

		// PARTIALLY replace the object's elements. Replace existing ones, append NON-existing ones. Basically, it merges objects
		req.store.posts[req.params.postId] = Object.assign(req.store.posts[req.params.postId], req.body)
		res.status(200).send(req.store.posts[req.params.postId])  
	},

	// DELETE method
	removePost(req, res) {
		req.store.posts.splice(req.params.postId, 1)
		res.status(204).send()
	}
}