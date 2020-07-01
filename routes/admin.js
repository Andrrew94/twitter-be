const express = require('express');
const router = express.Router();

// Controllers
const tasksController =  require('../controller/tasks');

router.get('/tasks', tasksController.getAllTasks);

module.exports = router;