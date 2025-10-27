// src/routes/task.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/task.controller');

// GET /api/tasks
router.get('/', controller.getAllTasks);

// POST /api/tasks
router.post('/', controller.createTask);

module.exports = router;