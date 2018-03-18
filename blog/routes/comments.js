exports.getComments = function(request, response) {
	response.status(200).send(request.store.posts[request.params.postId].comments)
}

exports.postComment = function(request, response) {
	let newComment = request.body
	let comments = request.store.posts[request.params.postId].comments;
	let commentId = comments.length
	comments.push(newComment);
	response.status(201).send({commentId: commentId})
}

exports.putComment = function(request, response) {
	let postId 					= request.params.postId
	let commentId				= request.params.commentId
	let selectedComment	= request.store.posts[postId].comments[commentId]
	selectedComment = Object.assign(selectedComment, request.body)
	response.status(200).send(selectedComment)
}

exports.deleteComment = function(request, response) {
	request.store.posts[request.params.postId].comments.splice(request.params.commentId, 1)
	response.status(204).send()
}