const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
    res.send("Hello John!");
});

router.get('/status', function(req, res) {
    res.send("Hello yozazazaz!");
});

router.put('/status', () => {})

module.exports = router;