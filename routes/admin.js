const express = require('express');
const router = express.Router();

// Controllers
const tasksController =  require('../controller/post');

router.get('/post', tasksController.createPost);

module.exports = router;