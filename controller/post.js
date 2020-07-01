const Post = require('../models/post');

module.exports.createPost = (req, response) => {
    const post = new Post("test post", "this is a test post");
    post.save().then(res => {
        response.send({"msg": "Successfully added a new post"})
    }).catch(err => {
        console.log("error failed adding a new post", err);
    })
}