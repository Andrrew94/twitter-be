const express = require('express');
const router = express.Router();

// Controllers
const postController =  require('../controller/post');

router.get('/post', postController.createPost);

module.exports = router;
