import express from "express"
import CatCtrl from "./catStatus.controller.js"
import { createContent } from "../../db/dao/contentDao.js";

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
router.get('/database', function(req, res) {

});

// Add to database 
router.post('/database', async function(req, res) {
    console.log("REACHED")
    const data = req.body;
    const newContent = await createContent({
        id: data.id,
        content: data.content,
        type: data.type
    });

    res.sendStatus(201);
});

module.exports = router;