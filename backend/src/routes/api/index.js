const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
    res.send("Hello John!");
});

// Get cat status 
router.get('/status', function(req, res) {
    res.send("Hello yozazazaz!");
});

// Change cat status 
router.put('/status', () => {})

// Fetch from database
router.get('/database', () => {})

// Add to database 
router.put('/database', () => {})

module.exports = router;