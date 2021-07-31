import express from "express"
import CatCtrl from "./catStatus.controller.js"


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