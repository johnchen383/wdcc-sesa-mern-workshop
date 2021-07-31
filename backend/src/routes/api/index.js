import express from "express"
import CatCtrl from "./catStatus.controller.js"

<<<<<<< HEAD
=======

>>>>>>> 35280f07b3d8d1b41a3c4b1339944889c2ef6946
const router = express.Router();

router.get('/', function(req, res) {
    res.send("Test Route");
});

// Get cat status 
router.get('/status', function(req, res) {
    res.send("Hello yozazazaz!");
});

// Change cat status 
router.put('/status', function(req, res) {

});

// Fetch from database
router.get('/database', () => {})

// Add to database 
router.put('/database', () => {})

module.exports = router;