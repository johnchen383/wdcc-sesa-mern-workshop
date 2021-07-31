import express from "express"
import { createContent, getContent, deleteContent } from "../../db/dao/contentDao.js";
import { getStatus, changeStatus } from "../../db/dao/statusDao.js";

const router = express.Router();

router.get('/', function(req, res) {
    res.send("Test Route");
});

// Get cat status 
router.get('/status', async function(req, res) {
    const status = await getStatus();
    res.json(status);
});

// Change cat status 
router.put('/status', async function(req, res) {
    const data = req.body;
    const newStatus = await changeStatus(data.status);
    res.json(newStatus);
});

// Fetch from database
router.get('/database/:id', async function(req, res) {
    const {id} = req.params;
    const content = await getContent(id);
    res.json(content);
});

// Add to database 
router.post('/database', async function(req, res) {
    const data = req.body;
    const newContent = await createContent({
        id: data.id,
        content: data.content,
        type: data.type
    });

    res.status(201).json(newContent);
});

// delete from database
router.delete('/database/:id', async function(req, res) {
    const {id} = req.params;
    await deleteContent(id);

    res.sendStatus(204);
});

module.exports = router;